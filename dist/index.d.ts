import { FC, HTMLAttributes } from "react";
import FlickityType from 'flickity';
interface Props extends HTMLAttributes<HTMLDivElement> {
    flickityRef?: (flickity: FlickityType) => void;
    options: FlickityType.Options;
}
declare const Slider: FC<Props>;
export default Slider;
