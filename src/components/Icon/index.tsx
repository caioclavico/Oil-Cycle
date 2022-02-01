import { forwardRef, Image, ImageProps } from "@chakra-ui/react";
import { ForwardRefRenderFunction } from "react";

interface IconProps extends ImageProps {
  size?: string;
}

const IconBase: ForwardRefRenderFunction<HTMLButtonElement, IconProps> = (
  { size, ...rest },
  ref
) => <Image w={`${size}px`} h={`${size}px`} objectFit="contain" {...rest} />;

export const Icon = forwardRef(IconBase);
