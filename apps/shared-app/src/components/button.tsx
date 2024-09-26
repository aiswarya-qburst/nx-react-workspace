import { useState } from "react";

import { uppercase } from '@nx-react-workspace/utils';

export function Button({str='no str'}) {
    const [ text, setText ] = useState('Click');

    const handleClick = () => setText('Clicked!!');

    return (
        <input type='button' onClick={handleClick} value={uppercase(str)} />
    );
}