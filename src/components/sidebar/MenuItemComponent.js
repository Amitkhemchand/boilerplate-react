import React from 'react';
import { bool, func, string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { css } from 'aphrodite';
import MenuCSS from '../../css/MenuItemCSS'

function MenuItemComponent(props) {
    const { active, icon, title, ...otherProps } = props;
    const Icon = icon;
    return (
        <Row className={css(MenuCSS.container, active && MenuCSS.activeContainer)} vertical="center" {...otherProps}>
            {active && <div className={css(MenuCSS.activeBar)}></div>}
            <Icon fill={active && "#DDE2FF"} opacity={!active && "0.4"} />
            <span className={css(MenuCSS.title, active && MenuCSS.activeTitle)}>{title}</span>
        </Row>
    );
}

MenuItemComponent.propTypes = {
    active: bool,
    icon: func,
    title: string
};

export default MenuItemComponent;