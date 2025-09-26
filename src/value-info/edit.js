import { __ } from '@wordpress/i18n';
import { 
    useBlockProps, 
    InspectorControls, 
    InnerBlocks 
} from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { align } = attributes;

    const handleAlignmentChange = (newAlign) => {
        setAttributes({ align: newAlign });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Block alignement', 'skp-blocks')} initialOpen={true}>
                    <SelectControl
                        label={__('Select Alignment', 'skp-blocks')}
                        value={align}
                        options={[
                            { label: __('Left', 'skp-blocks'), value: 'left' },
                            { label: __('Right', 'skp-blocks'), value: 'right' }
                        ]}
                        onChange={handleAlignmentChange}
                    />
                </PanelBody>
            </InspectorControls>


            <div className='page-container'>
                <div { ...useBlockProps({ className: `skp-value-info skp-value-info--${align}` }) }>
                    <InnerBlocks 
                        allowedBlocks={ [ 'core/paragraph', 'core/buttons', 'skp-blocks/tagline'] } 
                        template={[
                            [ 'skp-blocks/tagline' ],
                            [ 'core/paragraph', { placeholder: 'Add project description…' } ]
                        ]}
                        templateLock={ false }
                    />
                </div>
            </div>
        </>
    );
}
