import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { backgroundImage } = attributes;

    return (
        <div
            { ...useBlockProps.save({ 
                className: 'skp-image-w-text-overlay',
                style: backgroundImage ? { 
                    backgroundImage: `url(${backgroundImage})`,
                } : {} 
            }) }
        >
            <div className='skp-image-w-text-overlay__inner page-container'>
                <span className='skp-image-w-text-overlay__art skp-image-w-text-overlay__art--top'></span>
                <div className='skp-image-w-text-overlay__inner-blocks'>
                    <InnerBlocks.Content />
                </div>
                <span className='skp-image-w-text-overlay__art skp-image-w-text-overlay__art--bottom'></span>
            </div>
        </div>
    );
}
