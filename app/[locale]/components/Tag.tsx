import { Tag as AntTag, TagProps } from "antd";
import {CloseOutlined} from "@ant-design/icons";


interface ItagProps extends TagProps {
    size: "large" | "medium" | "small";
}
function CustomTag({ children, onClose }: { children: string; onClose: () => void }) {
    return (
        <div className="flex items-center bg-blue-500 text-white px-3 py-1 rounded-full shadow-md">
            <span className="mr-2">{children}</span>
            <button onClick={onClose} className="text-white hover:text-gray-300">
                <CloseOutlined />
            </button>
        </div>
    );
}

export default CustomTag;