import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Save( {attributes} ) {
    const { imageUrl, info } = attributes;

    return (
        <div { ...useBlockProps.save({ className: 'skp-team-member' }) }>
            { imageUrl && (
                <img className="skp-team-member__image" src={imageUrl} alt={__('Team member image', 'skp-theme')} />
            )}
            <RichText.Content tagName='p' value={ info } />
        </div>
    );
}
