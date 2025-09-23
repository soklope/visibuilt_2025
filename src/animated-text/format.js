import { __ } from '@wordpress/i18n';
import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { Span } from '@wordpress/element';

const name = 'skp-theme/span-highlight';

registerFormatType(name, {
    title: __('Animate Span', 'skp-theme'),
    tagName: 'span',
    className: 'skp-animated-text__span',
    edit({ isActive, value, onChange }) {
        return (
            <RichTextToolbarButton
                icon="editor-code"
                title={__('Wrap in Span', 'skp-theme')}
                onClick={() => {
                    onChange(toggleFormat(value, { type: name }));
                }}
                isActive={isActive}
            />
        );
    },
});
