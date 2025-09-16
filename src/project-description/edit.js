import { __ } from '@wordpress/i18n';
import { 
    useBlockProps, 
    InspectorControls, 
    InnerBlocks 
} from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    return (
        <>
            <div { ...useBlockProps({ className: 'skp-project-description' }) }>
                <InnerBlocks 
                    allowedBlocks={ [ 'core/paragraph', 'core/buttons', 'skp-blocks/tagline'] } 
                    template={[
                        [ 'skp-blocks/tagline' ],
                        [ 'core/paragraph', { placeholder: 'Add project description…' } ],
                        [ 'core/buttons' ]
                    ]}
                    templateLock={ false }
                />
            </div>
        </>
    );
}
