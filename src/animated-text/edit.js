import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { text } = attributes;


    return (
        <>
            <div { ...useBlockProps({ className: 'skp-animated-text' }) }>
                <RichText
                    tagName="h6"
                    value={ text }
                    onChange={ (value) => setAttributes({ text: value }) }
                    placeholder={ __('Animated text here', 'skp-theme') }
                    className='skp-animated-text__value'
                />
            </div>
        </>
    );
}
