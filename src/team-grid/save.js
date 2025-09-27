import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Save() {
    return (
        <div { ...useBlockProps.save({ className: 'skp-team-grid page-container' }) }>
            <InnerBlocks.Content />
        </div>
    );
}
