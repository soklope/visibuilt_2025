import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { taglineText } = attributes;


    return (
        <>
            <div { ...useBlockProps({ className: 'skp-tagline' }) }>
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
