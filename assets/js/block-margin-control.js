( function( wp ) {
    var addFilter = wp.hooks.addFilter;
    var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
    var el = wp.element.createElement;
    var Fragment = wp.element.Fragment;
    var BlockControls = (wp.blockEditor && wp.blockEditor.BlockControls) || (wp.editor && wp.editor.BlockControls);
    var ToolbarGroup = wp.components.ToolbarGroup;
    var DropdownMenu = wp.components.DropdownMenu;

    function addAttributes( settings ) {
        settings.attributes = Object.assign( {}, settings.attributes, {
            bottomMargin: {
                type: 'string',
                default: '',
            },
        } );
        return settings;
    }
    addFilter( 'blocks.registerBlockType', 'mytheme/add-bottom-margin-attribute', addAttributes );

    var withBlockControls = createHigherOrderComponent( function( BlockEdit ) {
        return function( props ) {
            var attributes = props.attributes || {};
            var setAttributes = props.setAttributes;
            var bottomMargin = attributes.bottomMargin;

            return el( Fragment, null,
                el( BlockEdit, props ),
                el( BlockControls, null,
                    el( ToolbarGroup, null,
                        el( DropdownMenu, {
                            icon: 'layout', // better icon
                            label: 'Bottom Margin',
                            controls: [
                                { 
                                    title: 'None', 
                                    isActive: bottomMargin === '', 
                                    icon: bottomMargin === '' ? 'yes' : '', 
                                    onClick: function() { setAttributes( { bottomMargin: '' } ); } 
                                },
                                { 
                                    title: 'Small', 
                                    isActive: bottomMargin === 'skp-margin-s', 
                                    icon: bottomMargin === 'skp-margin-s' ? 'yes' : '', 
                                    onClick: function() { setAttributes( { bottomMargin: 'skp-margin-s' } ); } 
                                },
                                { 
                                    title: 'Medium', 
                                    isActive: bottomMargin === 'skp-margin-m', 
                                    icon: bottomMargin === 'skp-margin-m' ? 'yes' : '', 
                                    onClick: function() { setAttributes( { bottomMargin: 'skp-margin-m' } ); } 
                                },
                                { 
                                    title: 'Large', 
                                    isActive: bottomMargin === 'skp-margin-l', 
                                    icon: bottomMargin === 'skp-margin-l' ? 'yes' : '', 
                                    onClick: function() { setAttributes( { bottomMargin: 'skp-margin-l' } ); } 
                                },
                            ],
                        } )
                    )
                )
            );
        };
    }, 'withBlockControls' );

    addFilter( 'editor.BlockEdit', 'mytheme/add-bottom-margin-control', withBlockControls );

    function applyExtraClass( extraProps, blockType, attributes ) {
        if ( attributes && attributes.bottomMargin ) {
            extraProps.className = [ extraProps.className, attributes.bottomMargin ].filter( Boolean ).join( ' ' );
        }
        return extraProps;
    }
    addFilter( 'blocks.getSaveContent.extraProps', 'mytheme/apply-bottom-margin-class', applyExtraClass );

} )( window.wp );
