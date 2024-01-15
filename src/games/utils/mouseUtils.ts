import { Dispatch, MutableRefObject, SetStateAction } from "react";

export const mouseOverParent = (ref: MutableRefObject<any>, setMouseOver: Dispatch<SetStateAction<boolean>>, e: any) => {
  if (!ref || !ref.current)
    return

  if (ref.current?.contains(e.target) ||
    (ref.current.parentElement &&
      ref.current.parentElement?.contains(e.target))) {
    setMouseOver(true);
  }
}

export const mouseOutParent = (ref: MutableRefObject<any>, setMouseOver: Dispatch<SetStateAction<boolean>>, e: any) => {
  if (!ref || !ref.current)
    return

  if (!ref.current?.contains(e.target) ||
    (ref.current.parentElement &&
      !ref.current.parentElement?.contains(e.target))) {
    setMouseOver(false);
  }
}
