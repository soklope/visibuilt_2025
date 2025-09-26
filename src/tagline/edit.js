import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Button } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { taglineText, imageUrl, imageId } = attributes;

    const onSelectImage = (media) => {
        setAttributes({
            imageUrl: media.url,
            imageId: media.id,
        });
    };


    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Tagline Image', 'skp-theme')} initialOpen={true}>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={onSelectImage}
                            allowedTypes={['image']}
                            value={imageId}
                            render={({ open }) => (
                                <Button
                                    onClick={open}
                                    isSecondary
                                    isLarge
                                >
                                    { imageUrl ? __('Change Image', 'skp-theme') : __('Upload Image', 'skp-theme') }
                                </Button>
                            )}
                        />
                    </MediaUploadCheck>

                    { imageUrl && (
                        <img
                            src={imageUrl}
                            alt={__('Tagline image', 'skp-theme')}
                            style={{ marginTop: '10px', maxWidth: '100%' }}
                        />
                    )}
                </PanelBody>
            </InspectorControls>

            <div { ...useBlockProps({ className: 'skp-tagline' }) }>
                { imageUrl && (
                    <img className="skp-tagline__image" src={imageUrl} alt={__('Tagline image', 'skp-theme')} />
                )}

                <RichText
                    tagName="h6"
                    value={ taglineText }
                    onChange={ (value) => setAttributes({ taglineText: value }) }
                    placeholder={ __('Tagline text here', 'skp-theme') }
                />
            </div>
        </>
    );
}
