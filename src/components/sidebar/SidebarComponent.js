import React from 'react';
import { Column, Row  } from 'simple-flexbox';
import { css } from 'aphrodite';
import LogoComponent from './LogoComponent';
import MenuItemComponent from './MenuItemComponent';
import SidebarCSS from '../../css/SidebarCSS'

import { IconOverview, IconTickets, IconIdeas, IconContacts,IconAgents, IconArticles, IconSettings,IconSubscription, IconBurger } from "../../assets/icons";
class SidebarComponent extends React.Component {

    state = { expanded: false };

    onItemClicked = (item) => {
        this.setState({ expanded: false });
        return this.props.onChange(item);
    }

    isMobile = () => window.innerWidth <= 768;

    toggleMenu = () => this.setState(prevState => ({ expanded: !prevState.expanded }));

    renderBurger = () => {
        return <div onClick={this.toggleMenu} className={css(SidebarCSS.burgerIcon)}>
            <IconBurger />
        </div>
    }

    render() {
        const { expanded } = this.state;
        const isMobile = this.isMobile();
        return (
            <div style={{ position: 'relative' }}>
                <Row className={css(SidebarCSS.mainContainer)} breakpoints={{ 768: css(SidebarCSS.mainContainerMobile) }}>
                    {(isMobile && !expanded) && this.renderBurger()}
                    <Column className={css(SidebarCSS.container)} breakpoints={{ 768: css(SidebarCSS.containerMobile, expanded ? SidebarCSS.show : SidebarCSS.hide) }}>
                        <LogoComponent />
                        <Column className={css(SidebarCSS.menuItemList)}>
                            <MenuItemComponent
                                title="Overview" icon={IconOverview}
                                onClick={() => this.onItemClicked('Overview')}
                                active={this.props.selectedItem === 'Overview'}
                            />
                            <MenuItemComponent
                                title="Tickets" icon={IconTickets}
                                onClick={() => this.onItemClicked('Tickets')}
                                active={this.props.selectedItem === 'Tickets'}
                            />
                            <MenuItemComponent
                                title="Ideas" icon={IconIdeas}
                                onClick={() => this.onItemClicked('Ideas')}
                                active={this.props.selectedItem === 'Ideas'} />
                            <MenuItemComponent
                                title="Contacts" icon={IconContacts}
                                onClick={() => this.onItemClicked('Contacts')}
                                active={this.props.selectedItem === 'Contacts'} />
                            <MenuItemComponent
                                title="Agents" icon={IconAgents}
                                onClick={() => this.onItemClicked('Agents')}
                                active={this.props.selectedItem === 'Agents'} />
                            <MenuItemComponent
                                title="Articles" icon={IconArticles}
                                onClick={() => this.onItemClicked('Articles')}
                                active={this.props.selectedItem === 'Articles'} />
                            <div className={css(SidebarCSS.separator)}></div>
                            <MenuItemComponent
                                title="Settings" icon={IconSettings}
                                onClick={() => this.onItemClicked('Settings')}
                                active={this.props.selectedItem === 'Settings'} />
                            <MenuItemComponent
                                title="Subscription" icon={IconSubscription}
                                onClick={() => this.onItemClicked('Subscription')}
                                active={this.props.selectedItem === 'Subscription'} />
                        </Column>
                    </Column>
                    {isMobile && expanded && <div className={css(SidebarCSS.outsideLayer)} onClick={this.toggleMenu}></div>}
                </Row>
            </div>
        );
    };
}

export default SidebarComponent;