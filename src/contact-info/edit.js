import { __ } from '@wordpress/i18n';
import { 
    useBlockProps, 
    RichText, 
    InspectorControls 
} from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { heading, content, marginSize } = attributes;

    return (
        <>
            <InspectorControls>
                <PanelBody title="Margin Settings" initialOpen={true}>
                    <SelectControl
                        label="Margin Size"
                        value={marginSize}
                        options={[
                            { label: 'Extra Small', value: 'xs' },
                            { label: 'Small', value: 's' },
                            { label: 'Medium', value: 'm' },
                            { label: 'Large', value: 'l' },
                        ]}
                        onChange={(value) => props.setAttributes({ marginSize: value })}
                        __next40pxDefaultSize={ true }
                        __nextHasNoMarginBottom={ true }
                    />
                </PanelBody>
            </InspectorControls>

            <div { ...useBlockProps({ className: 'skp-contact-info' }) }>
                <RichText
                    tagName="h2"
                    value={ heading }
                    onChange={ (value) => setAttributes({ heading: value }) }
                    placeholder={ __('Add heading…', 'hero') }
                    className='skp-contact-info__heading'
                />
                <RichText
                    tagName="p"
                    value={ content }
                    onChange={ (value) => setAttributes({ content: value }) }
                    placeholder={ __('Add content…', 'hero') }
                    className='skp-contact-info__text'
                />
            </div>
        </>
    );
}
