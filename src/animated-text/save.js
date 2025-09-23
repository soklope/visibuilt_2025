import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save( {attributes} ) {
    const { text } = attributes;

    return (
        <div { ...useBlockProps.save({ className: 'skp-animated-text page-container' }) }>
            <RichText.Content 
                tagName='h2' 
                value={ text } 
                className='skp-animated-text__value'
            />
        </div>
    );
}
