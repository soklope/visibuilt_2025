import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Button, SelectControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { taglineText, imageUrl, imageId, align, layout } = attributes;

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

                <PanelBody title={ __( 'Layout', 'skp-theme' ) } initialOpen={ true }>
					<SelectControl
						label={ __( 'Choose alignement', 'skp-theme' ) }
						value={ align }
						options={ [
							{ label: __( 'left', 'skp-theme' ), value: 'left' },
							{ label: __( 'right', 'skp-theme' ), value: 'right' },
							{ label: __( 'center', 'skp-theme' ), value: 'center' },
						] }
						onChange={ ( value ) => setAttributes( { align: value } ) }
					/>

                    <SelectControl
						label={ __( 'Choose layout', 'skp-theme' ) }
						value={ layout }
						options={ [
							{ label: __( 'row', 'skp-theme' ), value: 'row' },
							{ label: __( 'column', 'skp-theme' ), value: 'column' },
						] }
						onChange={ ( value ) => setAttributes( { layout: value } ) }
					/>
				</PanelBody>
            </InspectorControls>

            <div { ...useBlockProps({ className: `skp-tagline skp-tagline--${align} skp-tagline--${layout}`  }) }>
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
