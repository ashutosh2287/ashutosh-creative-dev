import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Link, Trash2, Camera, Edit } from "lucide-react";
import { toast } from "sonner";

interface ImageManagerProps {
  currentImage?: string;
  onImageChange: (imageUrl: string | null) => void;
  trigger?: React.ReactNode;
  title?: string;
  aspectRatio?: "square" | "landscape" | "portrait";
}

const ImageManager = ({ 
  currentImage, 
  onImageChange, 
  trigger, 
  title = "Manage Image",
  aspectRatio = "square" 
}: ImageManagerProps) => {
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast.error("File size must be less than 5MB");
        return;
      }
      
      if (!file.type.startsWith('image/')) {
        toast.error("Please select an image file");
        return;
      }

      setUploadedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleUrlSubmit = () => {
    if (!imageUrl.trim()) {
      toast.error("Please enter an image URL");
      return;
    }
    setPreviewUrl(imageUrl);
  };

  const handleSaveImage = () => {
    if (uploadedFile) {
      // In a real app, you would upload the file to a server/cloud storage
      // For now, we'll use the object URL
      onImageChange(previewUrl);
      toast.success("Image updated successfully!");
    } else if (imageUrl.trim()) {
      onImageChange(imageUrl);
      toast.success("Image updated successfully!");
    } else {
      toast.error("Please select an image or enter a URL");
      return;
    }
    
    resetForm();
    setOpen(false);
  };

  const handleRemoveImage = () => {
    if (confirm("Are you sure you want to remove this image?")) {
      onImageChange(null);
      toast.success("Image removed successfully!");
      resetForm();
      setOpen(false);
    }
  };

  const resetForm = () => {
    setImageUrl("");
    setUploadedFile(null);
    setPreviewUrl("");
  };

  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case "landscape":
        return "aspect-video";
      case "portrait":
        return "aspect-[3/4]";
      default:
        return "aspect-square";
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="icon">
            <Camera size={18} />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Current Image Preview */}
          {(currentImage || previewUrl) && (
            <div className="space-y-3">
              <Label>Current Image</Label>
              <div className={`w-full ${getAspectRatioClass()} rounded-lg overflow-hidden border border-border bg-surface`}>
                <img 
                  src={previewUrl || currentImage} 
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          <Tabs defaultValue="url" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="url">
                <Link size={16} className="mr-2" />
                URL
              </TabsTrigger>
              <TabsTrigger value="upload">
                <Upload size={16} className="mr-2" />
                Upload
              </TabsTrigger>
            </TabsList>

            <TabsContent value="url" className="space-y-4">
              <div>
                <Label htmlFor="imageUrl">Image URL</Label>
                <div className="flex gap-2">
                  <Input
                    id="imageUrl"
                    type="url"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="https://example.com/image.jpg"
                  />
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={handleUrlSubmit}
                    disabled={!imageUrl.trim()}
                  >
                    Preview
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="upload" className="space-y-4">
              <div>
                <Label htmlFor="fileUpload">Upload Image</Label>
                <Input
                  id="fileUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Max file size: 5MB. Supported formats: JPG, PNG, GIF, WebP
                </p>
              </div>
            </TabsContent>
          </Tabs>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-end pt-4">
            {currentImage && (
              <Button 
                variant="destructive" 
                onClick={handleRemoveImage}
                className="mr-auto"
              >
                <Trash2 size={16} className="mr-2" />
                Remove
              </Button>
            )}
            <Button 
              variant="outline" 
              onClick={() => {
                resetForm();
                setOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleSaveImage}
              disabled={!previewUrl && !imageUrl.trim()}
              className="bg-gradient-primary"
            >
              Save Image
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageManager;