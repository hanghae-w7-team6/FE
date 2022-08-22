import React from "react";
import styled from "styled-components";

const Category = ({ showHover }) => {
  return (
    <>
      <CatrgoryIcon></CatrgoryIcon>
      <span>카테고리</span>
      <CategoryNav>
        {showHover && (
          <HeadSideBar>
            <div>
              <ul>
                <HeadSideBarItmes>
                  <div>
                    <img
                      src="https://collection-image.kurly.com/site-category-groups/53/HvsqcMrtERGBYLaqXIDukRUpaPNHl6qiFffd2T5E.png"
                      alt="추선선물세트"
                    />
                    <span>추석선물세트</span>
                  </div>
                  <div>
                    <img
                      src="https://collection-image.kurly.com/site-category-groups/12/xtK9aF5n9OfmNfWuLMmyHzxUaj7Y9pVx2MPetIex.png"
                      alt="와인"
                    />
                    <span>와인</span>
                  </div>
                  <div>
                    <img
                      src="https://collection-image.kurly.com/site-category-groups/2/EO7bBGPrhrByqlpJYMuIFOLWo0IiOMkgMYar4Tjv.png"
                      alt="과일"
                    />
                    <span>과일</span>
                  </div>
                </HeadSideBarItmes>
              </ul>
            </div>
          </HeadSideBar>
        )}
      </CategoryNav>
    </>
  );
};

export default Category;

export const CatrgoryIcon = styled.span`
  width: 16px;
  height: 14px;
  margin-right: 14px;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNiAxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMTZ2MS43SDBWMHptMCA2LjE1aDE2djEuN0gwdi0xLjd6bTAgNi4xNWgxNlYxNEgwdi0xLjd6IiBmaWxsPSIjMzMzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
    0px 0px / 16px 14px no-repeat;
`;

export const CategoryNav = styled.div`
  max-height: calc(95vh-55px);
  min-height: 200px;
  position: absolute;
  display: flex;
  top: 46px;
  padding-top: 10px;
`;

export const HeadSideBar = styled.div`
  max-height: calc(95vh-55px);
  min-height: 200px;
  position: absolute;
  display: flex;
  top: 0px;
  padding-top: 10px;
  & div {
    position: relative;
    z-index: 21;
    width: 249px;
    border: 1px solid rgb(221, 221, 221);
    background-color: rgb(255, 255, 255);
    animation: 0 linear 0s 1 normal none running animation-w43n76;
  }
  & ul {
    overflow-y: auto;
    width: 247px;
    height: 100%;
    background-color: rgb(255, 255, 255);
    cursor: pointer;
  }
`;

export const HeadSideBarItmes = styled.li`
  padding: 7px 0px 9px 14px;

  & div {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    border: none;
    padding-top: 20px;
  }
  & img {
    flex: 0 1 0%;
    width: 24px;
    height: 24px;
  }
  &span {
    flex: 1 1 0%;
    padding: 1px 20px 0px 10px;
    color: rgb(51, 51, 51);
    font-size: 14px;
    font-weight: 400px;
    line-height: 22px;
  }
`;
