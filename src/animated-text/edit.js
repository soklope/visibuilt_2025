import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, AlignmentControl, BlockControls } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { text, textAlign } = attributes;


    return (
        <>
            <BlockControls>
                <AlignmentControl
                value={textAlign}
                onChange={(newAlign) => setAttributes({ textAlign: newAlign })}
                />
            </BlockControls>

            <div { ...useBlockProps({ className: 'skp-animated-text' }) }>
                <RichText
                    tagName="h6"
                    value={ text }
                    onChange={ (value) => setAttributes({ text: value }) }
                    placeholder={ __('Animated text here', 'skp-theme') }
                    className='skp-animated-text__value'
                    style={{textAlign: textAlign}}
                />
            </div>
        </>
    );
}
