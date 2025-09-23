import { __ } from '@wordpress/i18n';
import { 
    useBlockProps, 
    InspectorControls, 
    InnerBlocks, 
    MediaUpload, 
    MediaUploadCheck 
} from '@wordpress/block-editor';
import { PanelBody, Button } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { backgroundImage } = attributes;

    const onSelectImage = (media) => {
        setAttributes({ backgroundImage: media.url });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Background Image', 'skp-blocks')} initialOpen={true}>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={onSelectImage}
                            allowedTypes={['image']}
                            value={backgroundImage}
                            render={({ open }) => (
                                <Button onClick={open} isSecondary>
                                    { backgroundImage ? __('Change Image', 'skp-blocks') : __('Select Image', 'skp-blocks') }
                                </Button>
                            )}
                        />
                    </MediaUploadCheck>
                    { backgroundImage && (
                        <div style={{ marginTop: '10px' }}>
                            <img src={backgroundImage} alt={__('Background', 'skp-blocks')} style={{ maxWidth: '100%' }} />
                        </div>
                    )}
                </PanelBody>
            </InspectorControls>

            <div 
                { ...useBlockProps({ 
                    className: 'skp-image-w-text-overlay',
                    style: backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}
                }) }
            >
                <InnerBlocks 
                    allowedBlocks={ [ 'core/paragraph', 'core/buttons', 'skp-blocks/tagline'] } 
                    template={[
                        [ 'skp-blocks/tagline' ],
                        [ 'core/paragraph', { placeholder: 'Add project description…' } ],
                        [ 'core/buttons' ]
                    ]}
                    templateLock={ false }
                />
            </div>
        </>
    );
}
