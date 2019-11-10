import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import Button from 'material-ui/Button';
import 'jquery-slimscroll/jquery.slimscroll.min';


class SideNavContent extends Component {
    componentDidMount() {
        const {history} = this.props;
        const $nav = $(this.nav);
        const slideDuration = 250;

        $nav.slimscroll({
            height: '100%'
        });

        const pathname = `#${history.location.pathname}`;// get current path

        $('ul.nav-menu > li.menu').click(function () {
            const menuLi = this;
            $('ul.nav-menu > li.menu').not(menuLi).removeClass('open');
            $('ul.nav-menu > li.menu ul').not($('ul', menuLi)).slideUp(slideDuration);
            $('> ul', menuLi).slideToggle(slideDuration);
            $(menuLi).toggleClass('open');
        });

        $('ul.sub-menu li').click(function (e) {
            let superSubMenu = $(this).parent();
            if (superSubMenu.parent().hasClass('active')) {
                $('li', superSubMenu).not($(this)).removeClass('active');
            }
            else {
                $('ul.sub-menu li').not($(this)).removeClass('active');
            }

            $(this).toggleClass('active');
            e.stopPropagation();
        });

        const activeLi = $('a[to="' + pathname + '"]');// select current a element
        const activeNav = activeLi.closest('ul'); // select closest ul
        if (activeNav.hasClass('sub-menu')) {
            activeNav.slideDown(slideDuration);
            activeNav.parent().addClass('open');
            activeLi.parent().addClass('active');
        } else {
            activeLi.parent().addClass('open');
        }
    }


    render() {
        return (
            <ul className="nav-menu" ref={(c) => {
                this.nav = c;
            }}>

                <li className="nav-header">Main</li>

                <li className="menu">
                    <Button href="javascript:void(0)">
                        <i className="zmdi zmdi-view-dashboard zmdi-hc-fw"/>
                        <span className="nav-text">Dashboard</span>
                    </Button>
                    <ul className="sub-menu">
                        <li>
                            <Link className="prepend-icon" to="/app/dashboard/default">
                                <span className="nav-text">Default</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/dashboard/eCommerce">
                                <span className="nav-text text-transform-none">eCommerce</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/dashboard/news">
                                <span className="nav-text">News</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/dashboard/intranet">
                                <span className="nav-text">Intranet</span>
                            </Link>
                        </li>
                    </ul>

                </li>

                <li className="ui_tooltip menu">
                    <Button className="void" href="javascript:void(0)">
                        <i className="zmdi zmdi-folder zmdi-hc-fw"/>
                        <span className="nav-text">Components</span>
                    </Button>

                    <ul className="sub-menu">
                        <li>
                            <Link className="prepend-icon" to="/app/components/alerts">
                                <span className="nav-text">Alerts</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/appbar">
                                <span className="nav-text">App Bar</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/auto-complete">
                                <span className="nav-text">AutoComplete</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/avatars">
                                <span className="nav-text">Avatars</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/badges">
                                <span className="nav-text">Badge</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/bottom-navigation">
                                <span className="nav-text">Bottom Navigation</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/breadcrumbs">
                                <span className="nav-text">Breadcrumbs</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/buttons">
                                <span className="nav-text">Buttons</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/button-group">
                                <span className="nav-text">Button Group</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/cards">
                                <span className="nav-text">Cards</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/carousel">
                                <span className="nav-text">Carousel</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/chips">
                                <span className="nav-text">Chips</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/color-picker">
                                <span className="nav-text">Color Picker</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/dialogs">
                                <span className="nav-text">Dialogs</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/dividers">
                                <span className="nav-text">Dividers</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/expansion-panel">
                                <span className="nav-text">Expansion Panel</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/drawer">
                                <span className="nav-text">Drawer</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/grid-list">
                                <span className="nav-text">Grid List</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/list">
                                <span className="nav-text">Lists</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/menu-paper">
                                <span className="nav-text">Menus & Paper</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/pickers">
                                <span className="nav-text">Pickers</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/popovers">
                                <span className="nav-text">Popovers</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/progressbar">
                                <span className="nav-text">Progress</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/selects">
                                <span className="nav-text">Selects</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/selection">
                                <span className="nav-text">Selection Control</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/snackbar">
                                <span className="nav-text">Snackbars</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/stepper">
                                <span className="nav-text">Stepper</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/tables">
                                <span className="nav-text">Tabels</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/tabs">
                                <span className="nav-text">Tabs</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/text-fields">
                                <span className="nav-text">Text Fields</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/tooltips">
                                <span className="nav-text">Tooltips</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/components/typography">
                                <span className="nav-text">Typography</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="menu no-arrow">
                    <Link to="/app/widgets">
                        <i className="zmdi zmdi-widgets zmdi-hc-fw"/>
                        <span className="nav-text">Widgets</span>
                    </Link>
                </li>

                <li className="menu no-arrow">
                    <Link to="/app/metrics">
                        <i className="zmdi zmdi-trending-up zmdi-hc-fw"/>
                        <span className="nav-text">Metrics</span>
                    </Link>
                </li>

                <li className="nav-header">View</li>

                <li className="menu">
                    <Button href="javascript:void(0)">
                        <i className="zmdi zmdi-view-web zmdi-hc-fw"/>
                        <span className="nav-text">Tables</span>
                    </Button>

                    <ul className="sub-menu">
                        <li>
                            <Link className="prepend-icon" to="/app/table/basic">
                                <span className="nav-text">Basic Table</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/table/data">
                                <span className="nav-text">Data Table</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="timeline_tooltip menu">
                    <Button href="javascript:void(0)">
                        <i className="zmdi zmdi-swap-alt zmdi-hc-fw zmdi-hc-rotate-90"/>
                        <span className="nav-text">Time Line</span>
                    </Button>
                    <ul className="sub-menu">

                        <li>
                            <Link className="prepend-icon" to="/app/time-line/default">
                                <span className="nav-text">Default</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/time-line/default-with-icon">
                                <span className="nav-text">Default with Icons</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/time-line/left-align">
                                <span className="nav-text">Left Aligned</span>
                            </Link>
                        </li>
                        {/*<li>
                            <Link className="prepend-icon" to="/app/time-line/zigzag">
                                <span className="nav-text">Zigzag</span>
                            </Link>
                        </li>*/}
                    </ul>
                </li>

                <li className="menu">
                    <Button href="javascript:void(0)">
                        <i className="zmdi zmdi-view-list zmdi-hc-fw"/>
                        <span className="nav-text">Custom Views</span>
                    </Button>
                    <ul className="sub-menu">
                        <li>
                            <Link className="prepend-icon" to="/app/custom-views/simple-list">
                                <span className="nav-text">Plain List View</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/custom-views/strip-list">
                                <span className="nav-text">Plain List with Divider</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/custom-views/card-list">
                                <span className="nav-text">Cards List View</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="nav-header">Form</li>

                <li className="menu">
                    <Button href="javascript:void(0)">
                        <i className="zmdi zmdi-book-image zmdi-hc-fw"/>
                        <span className="nav-text">Forms</span>
                    </Button>
                    <ul className="sub-menu">
                        <li>
                            <Link className="prepend-icon" to="/app/form/components">
                                <span className="nav-text">Components</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/form/stepper">
                                <span className="nav-text">Stepper</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="nav-header">Extensions</li>

                <li className="menu">
                    <Button className="void" href="javascript:void(0)">
                        <i className="zmdi zmdi-code-setting zmdi-hc-fw"/>
                        <span className="nav-text">Editors</span>
                    </Button>

                    <ul className="sub-menu">
                        <li>
                            <Link className="prepend-icon" to="/app/editor/ck">
                                <span className="nav-text">CKEditor</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/editor/wysiswyg">
                                <span className="nav-text">WYSISWYG Editor</span>
                            </Link>
                        </li>
                    </ul>

                </li>

                <li className="menu">
                    <Button className="void" href="javascript:void(0)">
                        <i className="zmdi zmdi-brush zmdi-hc-fw"/>
                        <span className="nav-text">Pickers</span>
                    </Button>

                    <ul className="sub-menu">
                        <li>
                            <Link className="prepend-icon" to="/app/pickers/date-time">
                                <span className="nav-text">Date & Time Pickers</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/pickers/color">
                                <span className="nav-text">Color Pickers</span>
                            </Link>
                        </li>
                    </ul>

                </li>

                <li className="menu">
                    <Button className="void" href="javascript:void(0)">
                        <i className="zmdi zmdi-key zmdi-hc-fw"/>
                        <span className="nav-text">Extensions</span>
                    </Button>

                    <ul className="sub-menu">
                        <li>
                            <Link className="prepend-icon" to="/app/extensions/dnd">
                                <span className="nav-text">Drag and Drop</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/extensions/sweet-alert">
                                <span className="nav-text">Sweet Alert</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/extensions/notification">
                                <span className="nav-text">Notification</span>
                            </Link>
                        </li>
                    </ul>

                </li>

                <li className="menu">
                    <Button href="javascript:void(0)">
                        <i className="zmdi zmdi-chart zmdi-hc-fw"/>
                        <span className="nav-text">Chart</span>
                    </Button>

                    <ul className="sub-menu">
                        <li>
                            <Link className="prepend-icon" to="/app/chart/line">
                                <span className="nav-text">Line Chart</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/chart/bar">
                                <span className="nav-text">Bar Chart</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/chart/area">
                                <span className="nav-text">Area chart</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/chart/composed">
                                <span className="nav-text">Composed Chart</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/chart/scatter">
                                <span className="nav-text">Scatter Chart</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/chart/pie">
                                <span className="nav-text">Pie Chart</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/chart/radial">
                                <span className="nav-text">Radial Chart</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/chart/radar">
                                <span className="nav-text">Radar Chart</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/chart/treemap">
                                <span className="nav-text">Tree Map</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="map_tooltip menu">
                    <Button href="javascript:void(0)">
                        <i className="zmdi zmdi-google-maps zmdi-hc-fw"/>
                        <span className="nav-text">Google Map</span>
                    </Button>

                    <ul className="sub-menu">
                        <li>
                            <Link className="prepend-icon" to="/app/map/simple">
                                <span className="nav-text">Simple Map</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/map/styled">
                                <span className="nav-text">Styled Map</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/map/geo-location">
                                <span className="nav-text">Geo Location</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/map/directions">
                                <span className="nav-text">Map Direction</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/map/overlay">
                                <span className="nav-text">Map Overlay</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/map/kml">
                                <span className="nav-text">Map Km Layer</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/map/popup-info">
                                <span className="nav-text">Map Popup Info</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/map/traffic">
                                <span className="nav-text">Map Traffic Layer</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/map/street-view">
                                <span className="nav-text">Street View</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/map/event">
                                <span className="nav-text">Event Listener</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/map/drawing">
                                <span className="nav-text">Map Drawing</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/map/clustering">
                                <span className="nav-text">Map Clustering</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="nav-header">Modules</li>

                <li className="menu">
                    <Button className="void" href="javascript:void(0)">
                        <i className="zmdi zmdi-calendar zmdi-hc-fw"/>
                        <span className="nav-text">Calendar</span>
                    </Button>

                    <ul className="sub-menu">
                        <li>
                            <Link className="prepend-icon" to="/app/calendar/basic">
                                <span className="nav-text">Basic</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/calendar/cultures">
                                <span className="nav-text">Cultures</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/calendar/dnd">
                                <span className="nav-text">Dnd</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/calendar/popup">
                                <span className="nav-text">Popup</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/calendar/rendering">
                                <span className="nav-text">Rendering</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/calendar/selectable">
                                <span className="nav-text">Selectable</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/calendar/timeslots">
                                <span className="nav-text">Timeslots</span>
                            </Link>
                        </li>
                    </ul>

                </li>

                <li className="menu">
                    <Button href="javascript:void(0)">
                        <i className="zmdi zmdi-shopping-cart zmdi-hc-fw"/>
                        <span className="nav-text text-transform-none">eCommerce</span>
                    </Button>

                    <ul className="sub-menu">

                        <li>
                            <Link className="prepend-icon" to="/app/ecommerce/products-list">
                                <span className="nav-text">Products List</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/ecommerce/products-grid">
                                <span className="nav-text">Products Grid</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="menu">
                    <Button href="javascript:void(0)">
                        <i className="zmdi zmdi-collection-item-8 zmdi-hc-fw"/>
                        <span className="nav-text">App Module</span>
                    </Button>

                    <ul className="sub-menu">
                        <li>
                            <Link className="prepend-icon" to="/app/app-module/login-1">
                                <span className="nav-text">Login Page 1</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/app-module/login-2">
                                <span className="nav-text">Login Page 2</span>
                            </Link>
                        </li>

                        <li>
                            <Link className="prepend-icon" to="/app/app-module/login-with-stepper">
                                <span className="nav-text">Login with Stepper</span>
                            </Link>
                        </li>

                        <li>
                            <Link className="prepend-icon" to="/app/app-module/sign-up-1">
                                <span className="nav-text">Signup Page 1</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/app-module/sign-up-2">
                                <span className="nav-text">Signup Page 2</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/app-module/forgot-password-1">
                                <span className="nav-text">Forgot Password 1</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/app-module/forgot-password-2">
                                <span className="nav-text">Forgot Password 2</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/app-module/lock-screen-1">
                                <span className="nav-text">Lock Screen-1</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/app-module/lock-screen-2">
                                <span className="nav-text">Lock Screen-2</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="menu no-arrow">
                    <Link to="/app/to-do">
                        <i className="zmdi zmdi-check-square zmdi-hc-fw"/>
                        <span className="nav-text">To-Do</span>
                    </Link>
                </li>

                <li className="menu no-arrow">
                    <Link to="/app/to-do-redux">
                        <i className="zmdi zmdi-check-square zmdi-hc-fw"/>
                        <span className="nav-text">To-Do Redux</span>
                    </Link>
                </li>

                <li className="menu no-arrow">
                    <Link to="/app/mail">
                        <i className="zmdi zmdi-email zmdi-hc-fw"/>
                        <span className="nav-text">Mail</span>
                    </Link>
                </li>

                <li className="menu no-arrow">
                    <Link to="/app/mail-redux">
                        <i className="zmdi zmdi-email zmdi-hc-fw"/>
                        <span className="nav-text">Mail Redux</span>
                    </Link>
                </li>


                <li className="menu no-arrow">
                    <Link to="/app/chat">
                        <i className="zmdi zmdi-comment zmdi-hc-fw"/>
                        <span className="nav-text">Chat</span>
                    </Link>
                </li>

                <li className="menu no-arrow">
                    <Link to="/app/chat-redux">
                        <i className="zmdi zmdi-comment zmdi-hc-fw"/>
                        <span className="nav-text">Chat Redux</span>
                    </Link>
                </li>

                <li className="menu no-arrow">
                    <Link to="/app/contact">
                        <i className="zmdi zmdi-account-box zmdi-hc-fw"/>
                        <span className="nav-text">Contact</span>
                    </Link>
                </li>

                <li className="menu no-arrow">
                    <Link to="/app/contact-redux">
                        <i className="zmdi zmdi-account-box zmdi-hc-fw"/>
                        <span className="nav-text">Contact Redux</span>
                    </Link>
                </li>

                <li className="nav-header">Extras</li>

                <li className="menu">
                    <Button href="javascript:void(0)">
                        <i className="zmdi zmdi-view-web zmdi-hc-fw"/>
                        <span className="nav-text">Icons</span>
                    </Button>
                    <ul className="sub-menu">
                        <li>
                            <Link className="prepend-icon" to="/app/icons/material">
                                <span className="nav-text">Google Material Icons</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="menu">
                    <Button href="javascript:void(0)">
                        <i className="zmdi zmdi-collection-bookmark zmdi-hc-fw zmdi-hc-rotate-90"/>
                        <span className="nav-text">Extra Elements</span>
                    </Button>
                    <ul className="sub-menu">
                        <li>
                            <Link className="prepend-icon" to="/app/extra-elements/pricing-table">
                                <span className="nav-text">Pricing Table</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/extra-elements/callouts">
                                <span className="nav-text">Callouts</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/extra-elements/testimonials">
                                <span className="nav-text">Testimonials</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="menu">
                    <Button href="javascript:void(0)">
                        <i className="zmdi zmdi-pages zmdi-hc-fw"/>
                        <span className="nav-text">Extra Pages</span>
                    </Button>
                    <ul className="sub-menu">
                        <li>
                            <Link className="prepend-icon" to="/app/extra-pages/about-us">
                                <span className="nav-text">About Us</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/extra-pages/contact-us">
                                <span className="nav-text">Contact Us</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/extra-pages/blog">
                                <span className="nav-text">Blog</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/extra-pages/faq">
                                <span className="nav-text">FAQ</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/extra-pages/portfolio">
                                <span className="nav-text">Portfolio</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/extra-pages/error-404">
                                <span className="nav-text">404 Error Page</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="prepend-icon" to="/app/extra-pages/error-500">
                                <span className="nav-text">500 Error Page</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="menu">
                    <Button href="javascript:void(0)">
                        <i className="zmdi zmdi-device-hub zmdi-hc-fw"/>
                        <span className="nav-text">Menu Levels</span>
                    </Button>

                    <ul className="sub-menu">
                        <li>
                            <Button className="prepend-icon" href="javascript:void(0)">
                                <span className="nav-text">Level 1</span>
                            </Button>
                        </li>
                        <li className="menu">
                            <Button className="prepend-icon" href="javascript:void(0)">
                                <span className="nav-text">Level 1</span>
                            </Button>

                            <ul className="sub-menu">
                                <li>
                                    <Button href="javascript:void(0)">
                                        <span className="nav-text">Level 2</span>
                                    </Button>
                                </li>
                                <li className="menu">
                                    <Button href="javascript:void(0)">
                                        <span className="nav-text">Level 2</span>
                                    </Button>

                                    <ul className="sub-menu">
                                        <li>
                                            <Button href="javascript:void(0)">
                                                <span className="nav-text">Level 3</span>
                                            </Button>
                                        </li>
                                        <li>
                                            <Button href="javascript:void(0)">
                                                <span className="nav-text">Level 3</span>
                                            </Button>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

            </ul>
        );
    }
}

export default withRouter(SideNavContent);
