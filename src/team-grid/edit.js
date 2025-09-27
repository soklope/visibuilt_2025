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
            <div { ...useBlockProps({ className: 'skp-team-grid' }) }>
                <InnerBlocks 
                    allowedBlocks={ [ 'skp-blocks/team-member'] } 
                    template={[
                        [ 'skp-blocks/team-member' ],
                    ]}
                    templateLock={ false }
                />
            </div>
        </>
    );
}
