import "./styles.editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { RichText, BlockControls, InspectorControls, AlignmentToolbar } from '@wordpress/editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
//import { Fragment } from "react";

registerBlockType("mytheme-blocks/secondblock", {
    title: __("Second Test Block", "mytheme-blocks"),
    description: __("Our second block", "mytheme-blocks"),
    category: "layout",
    icon: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
        >
            <g>
                <rect fill="none" height="24" width="24" />
            </g>
            <g>
                <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M8.46,14.45L7.1,13.83 c0.28-0.61,0.41-1.24,0.4-1.86c-0.01-0.63-0.14-1.24-0.4-1.8l1.36-0.63c0.35,0.75,0.53,1.56,0.54,2.4 C9.01,12.8,8.83,13.64,8.46,14.45z M11.53,16.01l-1.3-0.74c0.52-0.92,0.78-1.98,0.78-3.15c0-1.19-0.27-2.33-0.8-3.4l1.34-0.67 c0.64,1.28,0.96,2.65,0.96,4.07C12.51,13.55,12.18,14.86,11.53,16.01z M14.67,17.33l-1.35-0.66c0.78-1.6,1.18-3.18,1.18-4.69 c0-1.51-0.4-3.07-1.18-4.64l1.34-0.67C15.56,8.45,16,10.23,16,11.98C16,13.72,15.56,15.52,14.67,17.33z" />
            </g>
        </svg>
    ),
    keywords: [__("video", "mytheme-blocks"), __("iframe", "mytheme-blocks")],
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p'
        },
        alignment: {
            type: 'string'
        }
    },
    edit: ({ className, attributes, setAttributes }) => {
        console.log(attributes);
        const { content, alignment } = attributes;
        const onChangeContent = content => {
            //setAttributes({ content: content })
            setAttributes({content})
        }
        const onChangeAlignment = alignment => {
            setAttributes({alignment})
        }
        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('Panel', 'mytheme-blocks')}>
                        <ToggleControl label='soehtij' onChange={v => console.log(v) } />
                    </PanelBody>
                </InspectorControls>
                <BlockControls>
                    <AlignmentToolbar value={ alignment  } onChange={ onChangeAlignment } />
                </BlockControls>
                <RichText 
                    tagName="p"
                    className={className}
                    onChange={onChangeContent}
                    value={content}
                    formattingControls={['bold']}
                    style={{ textAlign: alignment }}
                />
            </>
        )
    },
    save: ({ attributes }) => {
        const { content, alignment } = attributes;
        return <RichText.Content
            tagName="p"
            value={content}
            style={{ textAlign: alignment }}
        />;
    },
});
