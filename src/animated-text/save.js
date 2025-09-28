import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save( {attributes} ) {
    const { text, textAlign } = attributes;

    return (
        <div { ...useBlockProps.save({ className: 'skp-animated-text page-container' }) }>
            <RichText.Content 
                tagName='h2' 
                value={ text } 
                className='skp-animated-text__value'
                style={{textAlign: textAlign}}
            />
        </div>
    );
}
