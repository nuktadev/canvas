"use client";
import React, { useState, useRef, useEffect } from "react";
import { Stage, Layer, Image, Line, Text } from "react-konva";
import Konva from "konva";
import html2canvas from "html2canvas";

const DrawImage: React.FC = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [tool, setTool] = useState<"pen" | "text" | "eraser">("pen");
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [lines, setLines] = useState<any[]>([]);
  const [texts, setTexts] = useState<any[]>([]);
  const [currentText, setCurrentText] = useState<string>("");
  const [textColor, setTextColor] = useState<string>("black");
  const [textSize, setTextSize] = useState<number>(20);
  const [penSize, setPenSize] = useState<number>(5);
  const [eraserSize, setEraserSize] = useState<number>(10);
  const [currentSize, setCurrentSize] = useState<number>(5);
  const [penColor, setPenColor] = useState<string>("black"); // Track pen color
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [undoStack, setUndoStack] = useState<{ lines: any[]; texts: any[] }[]>(
    []
  );
  const [redoStack, setRedoStack] = useState<{ lines: any[]; texts: any[] }[]>(
    []
  );
  const stageRef = useRef<Konva.Stage>(null);

  useEffect(() => {
    const img = new window.Image();
    img.crossOrigin = "anonymous"; // Set the crossOrigin property
    img.src = "https://picsum.photos/id/235/200/300";
    img.onload = () => setImage(img);
  }, []);

  const handleMouseDown = (e: Konva.KonvaEventObject<MouseEvent>) => {
    if (tool === "pen" || tool === "eraser") {
      setIsDrawing(true);
      const pos = stageRef.current?.getPointerPosition();
      if (pos) {
        setLines([
          ...lines,
          { points: [pos.x, pos.y], tool, color: penColor, size: currentSize },
        ]);
      }
    }
  };

  const handleMouseMove = (e: Konva.KonvaEventObject<MouseEvent>) => {
    if ((tool === "pen" || tool === "eraser") && isDrawing) {
      const pos = stageRef.current?.getPointerPosition();
      if (pos) {
        const newLines = [...lines];
        const lastLine = newLines[newLines.length - 1];
        lastLine.points = lastLine.points.concat([pos.x, pos.y]);
        setLines(newLines);
      }
    }
  };

  const handleMouseUp = () => {
    if (tool === "pen" || tool === "eraser") {
      setIsDrawing(false);
      // Save current state to undo stack
      setUndoStack([...undoStack, { lines, texts }]);
      // Clear redo stack
      setRedoStack([]);
    }
  };

  const handleAddText = () => {
    if (currentText.trim() !== "") {
      setTexts([
        ...texts,
        { text: currentText, x: 50, y: 50, color: textColor, size: textSize },
      ]);
      setCurrentText("");
      // Save current state to undo stack
      setUndoStack([...undoStack, { lines, texts }]);
      // Clear redo stack
      setRedoStack([]);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentText(e.target.value);
  };

  const handleTextColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextColor(e.target.value);
  };

  const handleTextSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTextSize(Number(e.target.value));
  };

  const handlePenSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPenSize(Number(e.target.value));
    setCurrentSize(Number(e.target.value));
  };

  const handleEraserSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEraserSize(Number(e.target.value));
    setCurrentSize(Number(e.target.value));
  };

  const handlePenColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPenColor(e.target.value);
  };

  const handleUndo = () => {
    if (undoStack.length > 0) {
      const lastState = undoStack[undoStack.length - 1];
      setRedoStack([...redoStack, { lines, texts }]);
      setLines(lastState.lines);
      setTexts(lastState.texts);
      setUndoStack(undoStack.slice(0, -1));
    }
  };
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const handleRedo = () => {
    if (redoStack.length > 0) {
      const lastState = redoStack[redoStack.length - 1];
      setUndoStack([...undoStack, { lines, texts }]);
      setLines(lastState.lines);
      setTexts(lastState.texts);
      setRedoStack(redoStack.slice(0, -1));
    }
  };

  console.log(imageUrl);
  const handleSave = () => {
    const uri = stageRef.current?.toDataURL();
    if (uri) {
      setImageUrl(uri); // Set the generated image URL for preview

      // Create a Blob from the data URL
      fetch(uri)
        .then((res) => res.blob())
        .then((blob) => {
          // Create a FormData object
          const formData = new FormData();
          formData.append("drawing", blob, "drawing.png"); // Append the image blob

          // Send the FormData to the backend using fetch
          fetch("YOUR_BACKEND_URL", {
            method: "POST",
            body: formData,
            headers: {
              // 'Content-Type' is automatically set to 'multipart/form-data' when using FormData
            },
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              return response.json();
            })
            .then((data) => {
              console.log("Image uploaded successfully:", data);
            })
            .catch((error) => {
              console.error("Error uploading image:", error);
            });
        });
    }
  };

  return (
    <div>
      <div className="flex mt-16 justify-center items-center gap-x-4 mb-4">
        <div className="flex justify-center items-center gap-x-4">
          <button
            className="px-3 py2 rounded bg-blue-400 text-white text-sm"
            onClick={() => setTool("pen")}
          >
            Pen
          </button>
          <button
            className="px-3 py2 rounded bg-blue-400 text-white text-sm"
            onClick={() => setTool("text")}
          >
            Text
          </button>
          <button
            className="px-3 py2 rounded bg-blue-400 text-white text-sm"
            onClick={() => setTool("eraser")}
          >
            Eraser
          </button>
          <button
            className="px-3 py2 rounded bg-blue-400 text-white text-sm"
            onClick={handleUndo}
          >
            Undo
          </button>
          <button
            className="px-3 py2 rounded bg-blue-400 text-white text-sm"
            onClick={handleRedo}
          >
            Redo
          </button>
          <button
            className="px-3 py2 rounded bg-blue-400 text-white text-sm"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
        {tool === "text" && (
          <div>
            <input
              className="py-1 px-2 border rounded "
              type="text"
              value={currentText}
              onChange={handleTextChange}
            />
            <input
              type="color"
              value={textColor}
              onChange={handleTextColorChange}
            />
            <select onChange={handleTextSizeChange} value={textSize}>
              <option value={12}>12px</option>
              <option value={16}>16px</option>
              <option value={20}>20px</option>
              <option value={24}>24px</option>
              <option value={30}>30px</option>
            </select>
            <button onClick={handleAddText}>Add Text</button>
          </div>
        )}
        {tool === "pen" && (
          <div>
            <input
              type="color"
              value={penColor}
              onChange={handlePenColorChange}
            />
            <select onChange={handlePenSizeChange} value={penSize}>
              <option value={2}>2px</option>
              <option value={5}>5px</option>
              <option value={10}>10px</option>
              <option value={15}>15px</option>
            </select>
          </div>
        )}
        {tool === "eraser" && (
          <div>
            <select onChange={handleEraserSizeChange} value={eraserSize}>
              <option value={5}>5px</option>
              <option value={10}>10px</option>
              <option value={15}>15px</option>
              <option value={20}>20px</option>
            </select>
          </div>
        )}
      </div>
      <Stage
        width={500}
        height={500}
        ref={stageRef}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
      >
        <Layer>
          {image && <Image image={image} width={500} height={500} />}
          {lines.map((line, index) => (
            <Line
              key={index}
              points={line.points}
              stroke={line.tool === "eraser" ? "white" : line.color}
              strokeWidth={line.size}
              lineCap="round"
              lineJoin="round"
            />
          ))}
          {texts.map((text, index) => (
            <Text
              key={index}
              text={text.text}
              x={text.x}
              y={text.y}
              fontSize={text.size}
              fill={text.color}
              draggable
            />
          ))}
        </Layer>
      </Stage>
      {imageUrl && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Preview:</h2>
          <img
            src={imageUrl}
            alt="Drawing Preview"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
};

export default DrawImage;
