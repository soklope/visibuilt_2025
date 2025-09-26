import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { heading, content } = attributes;

    return (
        <div { ...useBlockProps.save({ className: 'skp-contact-info page-container' }) }>
            { heading && (
                <RichText.Content
                    tagName="h2"
                    value={ heading }
                    className="skp-contact-info__heading"
                />
            ) }

            { content && (
                <RichText.Content
                    tagName="p"
                    value={ content }
                    className="skp-contact-info__text"
                />
            ) }
        </div>
    );
}
