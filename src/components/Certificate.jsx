import React, { useState } from "react"
import {
  Modal,
  IconButton,
  Box,
  Fade,
  Backdrop,
  Typography,
  Button,
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import FullscreenIcon from "@mui/icons-material/Fullscreen"

const Certificate = ({ ImgSertif, category, title, description, link }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Box component="div" sx={{ width: "100%", maxWidth: 400, margin: "0 auto" }}>
      {/* Main Card Container */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #ffffff 0%, #f8fffe 100%)",
          borderRadius: 4,
          padding: 3,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
          border: "1px solid rgba(229, 231, 235, 0.8)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
          },
        }}
      >
        {/* Certificate Image Container */}
        <Box
          sx={{
            position: "relative",
            borderRadius: 2,
            overflow: "hidden",
            cursor: "pointer",
            marginBottom: 3,
            "&:hover .overlay": { opacity: 1 },
            "&:hover .hover-content": {
              transform: "translate(-50%, -50%)",
              opacity: 1,
            },
          }}
          onClick={handleOpen}
        >
          <img
            className="certificate-image"
            src={ImgSertif}
            alt="Certificate"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "cover",
              borderRadius: "8px",
              transition: "filter 0.3s ease",
            }}
          />

          {/* Hover Overlay */}
          <Box
            className="overlay"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.6)",
              opacity: 0,
              transition: "all 0.3s ease",
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
            }}
          >
            {/* Hover Content */}
            <Box
              className="hover-content"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -60%)",
                opacity: 0,
                transition: "all 0.4s ease",
                textAlign: "center",
                color: "white",
              }}
            >
              <FullscreenIcon
                sx={{
                  fontSize: 40,
                  mb: 1,
                  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 500,
                  textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                }}
              >
                View Certificate
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Content Section */}
        <Box sx={{ textAlign: "left" }}>
          {/* Title */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#1f2937",
              marginBottom: 2,
              fontSize: "1.25rem",
              letterSpacing: "-0.025em",
            }}
          >
            {title || "Certificate Title"}
          </Typography>

          {/* Description */}
          <Typography
            variant="body2"
            sx={{
              color: "#6b7280",
              lineHeight: 1.6,
              marginBottom: 3,
              fontSize: "0.875rem",
            }}
          >
            {description || "Certificate description goes here. This explains what the certificate is for and any relevant details."}
          </Typography>

          {/* Certificate Button */}
          <Button
            component="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              color: "white",
              fontWeight: 600,
              fontSize: "0.875rem",
              textTransform: "none",
              borderRadius: 2,
              paddingX: 3,
              paddingY: 1,
              boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
              border: "none",
              transition: "all 0.2s ease",
              textDecoration: "none",
              "&:hover": {
                background: "linear-gradient(135deg, #059669 0%, #047857 100%)",
                transform: "translateY(-1px)",
                boxShadow: "0 6px 16px rgba(16, 185, 129, 0.4)",
                textDecoration: "none",
              },
              "&:active": {
                transform: "translateY(0)",
              },
            }}
          >
            Certificate
          </Button>

          {/* Category Badge (Optional) */}
          {category && (
            <Box
              sx={{
                display: "inline-block",
                background: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)",
                color: "#065f46",
                fontSize: "0.75rem",
                fontWeight: 600,
                padding: "4px 12px",
                borderRadius: 2,
                marginTop: 2,
                border: "1px solid #a7f3d0",
              }}
            >
              {category}
            </Box>
          )}
        </Box>
      </Box>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            backdropFilter: "blur(8px)",
          },
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
          padding: 2,
        }}
      >
        <Fade in={open} timeout={300}>
          <Box
            sx={{
              position: "relative",
              width: "auto",
              maxWidth: "95vw",
              maxHeight: "95vh",
              outline: "none",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
              "&:focus": {
                outline: "none",
              },
            }}
          >
            {/* Close Button */}
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 16,
                top: 16,
                color: "white",
                bgcolor: "rgba(0,0,0,0.7)",
                zIndex: 10,
                padding: 1.5,
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(255,255,255,0.1)",
                "&:hover": {
                  bgcolor: "rgba(0,0,0,0.9)",
                  transform: "scale(1.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                },
                transition: "all 0.2s ease",
              }}
              size="large"
            >
              <CloseIcon sx={{ fontSize: 24 }} />
            </IconButton>

            {/* Modal Image */}
            <img
              src={ImgSertif}
              alt="Certificate Full View"
              style={{
                display: "block",
                maxWidth: "100%",
                maxHeight: "95vh",
                margin: "0 auto",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Fade>
      </Modal>
    </Box>
  )
}

export default Certificate