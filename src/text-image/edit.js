import { __ } from '@wordpress/i18n';
import { 
    useBlockProps, 
    RichText, 
    MediaUpload, 
    MediaUploadCheck, 
    InspectorControls 
} from '@wordpress/block-editor';
import { PanelBody, Button } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { heading, content, imageUrl } = attributes;

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __('Hero Image', 'hero') } initialOpen={ true }>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={ (media) => setAttributes({ imageUrl: media.url }) }
                            allowedTypes={ ['image'] }
                            value={ imageUrl }
                            render={ ({ open }) => (
                                <Button
                                    isSecondary
                                    onClick={ open }
                                >
                                    { !imageUrl ? __('Upload Image', 'hero') : __('Change Image', 'hero') }
                                </Button>
                            )}
                        />
                    </MediaUploadCheck>
                </PanelBody>
            </InspectorControls>

            <div { ...useBlockProps({ className: 'wp-block-skp-blocks-hero' }) }>
                <RichText
                    tagName="h2"
                    value={ heading }
                    onChange={ (value) => setAttributes({ heading: value }) }
                    placeholder={ __('Add heading…', 'hero') }
                />
                <RichText
                    tagName="p"
                    value={ content }
                    onChange={ (value) => setAttributes({ content: value }) }
                    placeholder={ __('Add content…', 'hero') }
                />
                { imageUrl && <img src={ imageUrl } alt="" /> }
            </div>
        </>
    );
}
