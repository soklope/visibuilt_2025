import { __ } from '@wordpress/i18n';
import { 
    useBlockProps, 
    InspectorControls, 
    InnerBlocks,
    MediaUpload, 
    MediaUploadCheck,
    RichText
} from '@wordpress/block-editor';
import { PanelBody, Button, SelectControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { imageUrl, imageId, info } = attributes;

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

            <div { ...useBlockProps({ className: 'skp-team-member' }) }>
                { imageUrl && (
                    <img className="skp-team-member__image" src={imageUrl} alt={__('Tagline image', 'skp-theme')} />
                )}

                <RichText
                    tagName="p"
                    value={ info }
                    onChange={ (value) => setAttributes({ info: value }) }
                    placeholder={ __('Team member info..', 'skp-theme') }
                />
            </div>
        </>
    );
}
