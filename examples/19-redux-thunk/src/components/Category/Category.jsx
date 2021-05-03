import { useEffect } from "react";
import { useParams } from "react-router-dom";

import MainLayout from "../Layouts/MainLayout";
import Nominee from "./Nominee.jsx";
import PrevCategoryButton from "./PrevCategoryButton";
import NextCategoryButton from "./NextCategoryButton";
import Loading from "../Widgets/Loading";
import ErrorMessage from "../Widgets/ErrorMessage";

function Category(props) {
  /**
   * Completed Example
   * Gets a list of categories when the component mounts
   */
  useEffect(() => {
    if (!props.categories) props.fetchAllNominees();
  }, []);

  /**
   * Gets category Id from the URL
   */
  const { id } = useParams();
  const categoryId = parseInt(id);

  /**
   * After the categories load ...
   */
  if (props.categories) {
    const { category, nominees } = props.categories[categoryId];
    return (
      <MainLayout>
        <h1 className="h2 text-center">{category}</h1>
        <div className="card-group mb-2">
          {nominees.map((nominee, index) => {
            const key = `nominee-${index}`;
            /**
             * If the nominee has been voted for, isSelected will be true
             */
            const isSelected =
              props.votes.hasOwnProperty(categoryId) &&
              props.votes[categoryId] === index;
            /**
             * When clicked, you will need to trigger the vote action, which will be
             * passed down at props. Please see "src/components/Category/CategoryContainer.js"
             */
            return (
              <Nominee
                key={key}
                nominee={nominee}
                onClick={() => props.vote(categoryId, index)}
                isSelected={isSelected}
              />
            );
          })}
        </div>
        <div className="clearfix">
          <PrevCategoryButton currentCategoryId={categoryId} />
          <NextCategoryButton
            currentCategoryId={categoryId}
            maxCategoryId={Object.values(props.categories).length}
          />
        </div>
        <div className="mt-3">
          {/**
           * If there is an AJAX failure with voting, display the error message
           * "This is embarrassing. We were unable to save your vote. Please try again later."
           */}
        </div>
        {props.hasError && (
          <ErrorMessage>
            This is embarrassing. We were unable to save your vote. Please try
            again later.
          </ErrorMessage>
        )}
      </MainLayout>
    );
  } else {
    return (
      <MainLayout>
        {props.isLoading && <Loading className="text-center" />}
        {props.hasError && (
          <ErrorMessage>
            This is embarrassing. We were unable to save your vote. Please try
            again later.
          </ErrorMessage>
        )}
      </MainLayout>
    );
  }
}

export default Category;
