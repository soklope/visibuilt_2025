import { __ } from '@wordpress/i18n';
import { 
    useBlockProps, 
    RichText, 
} from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { heading, content } = attributes;

    return (
        <>
            <div { ...useBlockProps({ className: 'skp-contact-info' }) }>
                <RichText
                    tagName="h2"
                    value={ heading }
                    onChange={ (value) => setAttributes({ heading: value }) }
                    placeholder={ __('Add heading…', 'hero') }
                    className='skp-contact-info__heading'
                />
                <RichText
                    tagName="p"
                    value={ content }
                    onChange={ (value) => setAttributes({ content: value }) }
                    placeholder={ __('Add content…', 'hero') }
                    className='skp-contact-info__text'
                />
            </div>
        </>
    );
}
