import { JSX, h } from "preact";
import Label from "../components/label";
import FlexContainer from "../components/flex-container";
import { SetPagesNameProps } from "../types/pages-name";

interface OtherPageProps extends SetPagesNameProps {}

const OtherPage = ({ ...props }: OtherPageProps): JSX.Element => {
  const handlerClick = () => {
    props.setPageTitle("Home Page");
  };
  return (
    <FlexContainer full class="bg-white justify-center items-center gap-1">
      Elika
      <button
        class={"border border-black text-black bg-blue-300 p-4 rounded-md"}
        onClick={handlerClick}
      >
        Next Page
      </button>
    </FlexContainer>
  );
};
export default OtherPage;
