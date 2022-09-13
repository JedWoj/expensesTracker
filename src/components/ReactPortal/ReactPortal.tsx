import { createPortal } from 'react-dom';
import {createWrapperAndAppendToBody} from './helper';

interface ReactPortalProps  {
    children: JSX.Element,
    wrapperId: string,
}

const ReactPortal = ({ children, wrapperId = "react-portal-wrapper" }: ReactPortalProps) => {
    let element = document.getElementById(wrapperId);
    if (!element) {
      element = createWrapperAndAppendToBody(wrapperId);
    }
    return createPortal(children, element);
}

export default ReactPortal;