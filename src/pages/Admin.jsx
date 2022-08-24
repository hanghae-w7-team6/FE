import React, { useRef, useCallback, useState } from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import S3upload from "react-aws-s3";
import imageCompression from "browser-image-compression";
import { postProductAsync } from "../redux/modules/productSlice";

window.Buffer = window.Buffer || require("buffer").Buffer;
const Admin = () => {
  const [productName, onChangeName] = useInput("");
  const [price, onChangePrice] = useInput("");
  const [desc, onChangeDesc] = useInput("");
  const [category, setCategory] = useState("");
  const [delivery, onChangeDelivery] = useInput("");
  const [fileUrl, setFileUrl] = useState(null);

  const dispatch = useDispatch();
  const imgUpload = useRef();

  const onChangeImage = async (e) => {
    const imageFile = e.target.files[0];
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);
      const imageUrl = URL.createObjectURL(compressedFile);
      setFileUrl(imageUrl);
    } catch (error) {
      console.error(error);
    }
  };

  const CategorySelect = (e) => {
    setCategory(e.target.value);
  };

  const onSubmitProduct = useCallback(
    (e) => {
      e.preventDefault();
      let file = imgUpload.current.files[0];
      let newFileName = imgUpload.current.files[0].name;
      const config = {
        bucketName: process.env.REACT_APP_BUCKET_NAME,
        region: process.env.REACT_APP_REGION,
        accessKeyId: process.env.REACT_APP_ACCESS_ID,
        secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
      };
      const ReactS3Client = new S3upload(config);
      ReactS3Client.uploadFile(file, newFileName).then((data) => {
        if (data.status === 204) {
          let imgUrl = data.location;
          dispatch(
            postProductAsync({
              productName,
              price,
              desc,
              category,
              delivery,
              productImage: imgUrl,
            })
          );
        }
      });
      alert("완료");
      window.location.reload();
    },
    [productName, price, desc, category, delivery]
  );

  return (
    <>
      <AdminHead>상품 등록 해주세요</AdminHead>
      <AdminWrap onSubmit={onSubmitProduct}>
        <AdminLabel>
          <span>상품명</span>
          <AdminInput value={productName} onChange={onChangeName} />
        </AdminLabel>
        <AdminLabel>
          <span>상품 이미지</span>
          <AdminInput
            type="file"
            accept="/image/*"
            id="upload-img"
            ref={imgUpload}
            onChange={onChangeImage}
          />
          <ImagePreview src={fileUrl} />
        </AdminLabel>
        <AdminLabel>
          <span>가격</span>
          <AdminInput value={price} onChange={onChangePrice} />
        </AdminLabel>
        <AdminLabel>
          <span>한줄평</span>
          <AdminInput value={desc} onChange={onChangeDesc} />
        </AdminLabel>
        <AdminLabel>
          <span>카테고리</span>
          <select onChange={CategorySelect}>
            <option value="추석선물세트">추석선물세트</option>
            <option value="와인">와인</option>
            <option value="과일">과일</option>
          </select>
        </AdminLabel>
        <AdminLabel>
          <span>딜리버리</span>
          <AdminInput value={delivery} onChange={onChangeDelivery} />
        </AdminLabel>
        <AdminBuottn>작성하기</AdminBuottn>
      </AdminWrap>
    </>
  );
};

const AdminHead = styled.div`
  margin: auto;
  width: 100%;
  text-align: center;
  font-size: 40px;

  margin-bottom: 70px;
`;
const AdminWrap = styled.form`
  display: flex;
  width: 50%;
  height: 50%;
  flex-direction: column;
  margin: auto;
  align-items: center;
`;

const AdminLabel = styled.label`
  margin-bottom: 16px;
  color: black;
  width: 50%;

  & > span {
    display: block;
    text-align: left;
    padding-bottom: 8px;
    font-size: 15px;
    cursor: pointer;
    line-height: 1.46666667;
    font-weight: 700;
  }
`;

const AdminInput = styled.input`
  border-radius: 4px;
  --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
  border: 1px solid var(--saf-0);
  box-sizing: border-box;
  margin: 0 0 20px;
  width: 100%;
  padding: 12px;
  height: 44px;
  padding-top: 11px;
  padding-bottom: 13px;
  font-size: 18px;
  line-height: 1.33333333;

  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;

const AdminBuottn = styled.button`
  margin-bottom: 12px;
  width: 50%;
  max-width: 100%;
  color: #fff;
  background-color: #202540;
  border: none;
  font-size: 18px;
  font-weight: 900;
  height: 44px;
  min-width: 96px;
  padding: 0 16px 3px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #282d4e;
    border: none;
  }
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;
const ImagePreview = styled.img`
  width: 100%;
  max-height: 200px;
`;
export default Admin;
