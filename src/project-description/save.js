import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Save() {
    return (
        <div { ...useBlockProps.save({ className: 'skp-project-description' }) }>
            <InnerBlocks.Content />
        </div>
    );
}
