const breakpoints = {
    xSmall: 480,
    small: 768,
    medium: 992,
    xLarge: 1200
};

export default {
    breakpoints,
    // portraitMobile
    portraitPhone: `screen and (max-width: ${breakpoints.xSmall}px)`,
    /* Landscape phones and portrait tablets */
    landscapePhone: `screen and (max-width: ${breakpoints.small -1 }px)`,
    /* Portrait tablets and small desktops */
    portraitTablet: `screen and (min-width: ${breakpoints.small}px) and (max-width: ${breakpoints.medium}px)`,
    /* Portrait tablets and small desktops */
    landscapeTablet: `screen and (min-width: ${breakpoints.medium}px) and (max-width: ${breakpoints.xLarge - 1}px)`,
    /* Large desktops and laptops */
    largeDesktop: `screen and (min-width: ${breakpoints.xLarge}px)`
};
