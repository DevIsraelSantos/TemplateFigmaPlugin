import { JSX, h } from "preact";
import Label from "../components/label";
import FlexContainer from "../components/flex-container";
import { SetPagesNameProps } from "../types/pages-name";

interface DefaultPageProps extends SetPagesNameProps {}

const DefaultPage = ({ ...props }: DefaultPageProps): JSX.Element => {
  const handlerClick = () => {
    props.setPageTitle("Page 2");
  };
  return (
    <FlexContainer full class="bg-white justify-center items-center gap-1">
      <Label black xs>
        xs label
      </Label>
      <Label black sm>
        sm label
      </Label>
      <Label black>base label</Label>
      <Label black lg>
        lg label
      </Label>
      <Label black xl>
        xl label
      </Label>
      <button
        class={"border border-black text-black bg-blue-300 p-4 rounded-md"}
        onClick={handlerClick}
      >
        Next Page
      </button>
    </FlexContainer>
  );
};
export default DefaultPage;
