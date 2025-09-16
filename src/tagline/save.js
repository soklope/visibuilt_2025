import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save( {attributes} ) {
    const { taglineText } = attributes;

    return (
        <div { ...useBlockProps.save({ className: 'skp-tagline' }) }>
            <RichText.Content tagName='p' value={ taglineText } />
        </div>
    );
}
