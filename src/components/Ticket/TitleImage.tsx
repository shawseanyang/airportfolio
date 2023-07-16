export type TitleImageProps = {
  src: string;
};
const TitleImage = (props: TitleImageProps) => (
  <img src={props.src} style={{maxHeight: '150px', maxWidth: '200px'}}/>
);
export default TitleImage;