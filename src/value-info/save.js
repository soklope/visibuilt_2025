import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Save( {attributes} ) {
    const { align } = attributes;

    return (
        <div className='page-container'>
            <div { ...useBlockProps.save({ className: `skp-value-info skp-value-info--${align}` }) }>
                <InnerBlocks.Content />
            </div>
        </div>
    );
}
