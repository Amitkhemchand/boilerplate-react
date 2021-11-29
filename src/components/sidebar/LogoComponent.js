import React from 'react';
import { Row } from 'simple-flexbox';
import { css } from 'aphrodite'
import LogoCSS from '../../css/LogoCSS'
import Logo from '../../assets/icons/icon-logo';

function LogoComponent() {
    return (
        <Row className={css(LogoCSS.container)} horizontal="center" vertical="center">
            <Logo />
            <span className={css(LogoCSS.title)}>Dashboard Kit</span>
        </Row>
    );
}

export default LogoComponent;