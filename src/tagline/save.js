import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Save( {attributes} ) {
    const { taglineText, imageUrl, imageId, align, layout } = attributes;

    return (
        <div { ...useBlockProps.save({ className:  `skp-tagline skp-tagline--${align} skp-tagline--${layout}` }) }>
            { imageUrl && (
                <img className="skp-tagline__image" src={imageUrl} alt={__('Tagline image', 'skp-theme')} />
            )}
            <RichText.Content tagName='p' value={ taglineText } />
        </div>
    );
}
