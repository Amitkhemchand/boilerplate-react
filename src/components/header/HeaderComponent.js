import React from 'react';
import { string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { css } from 'aphrodite';
import IconSearch from '../../assets/icons/icon-search';
import IconBellNew from '../../assets/icons/icon-bell-new';
import HeaderCSS from '../../css/HeaderCSS'

function HeaderComponent(props) {
    const { icon, title, ...otherProps } = props;
    return (
        <Row className={css(HeaderCSS.container)} vertical="center" horizontal="space-between" {...otherProps}>
            <span className={css(HeaderCSS.title)}>{title}</span>
            <Row vertical="center">
                <div className={css(HeaderCSS.iconStyles)}>
                    <IconSearch />
                </div>
                <div className={css(HeaderCSS.iconStyles)}>
                    <IconBellNew />
                </div>
                <div className={css(HeaderCSS.separator)}></div>
                <Row vertical="center">
                    <span className={css(HeaderCSS.name, HeaderCSS.cursorPointer)}>Germán Llorente</span>
                    <img src="https://avatars3.githubusercontent.com/u/21162888?s=460&v=4" alt="avatar" className={css(HeaderCSS.avatar, HeaderCSS.cursorPointer)} />
                </Row>
            </Row>
        </Row>
    );
}

HeaderComponent.propTypes = {
    title: string
};

export default HeaderComponent;