import { FC } from "react";
import { PictureInfo } from "../../core/model";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import DeleteIcon from "@mui/icons-material/Delete";

import { useNavigate } from "react-router-dom";

interface Props {
  cartPictures: PictureInfo[];
  deleteFromCart: (id: string) => void;
  removeAll: () => void;
  totalCartBalance: number;
}

export const CartComponent: FC<Props> = (props) => {
  const { cartPictures, deleteFromCart, removeAll, totalCartBalance } = props;
  const navigate = useNavigate();

  return (
    <Grid2
      container
      sx={{
        display: "flex",
        width: {
          xs: "160px",
          sm: "300px",
          md: "415px",
        },
      }}
    >
      <Grid2
        size={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          p: "20px",
        }}
      >
        {cartPictures.length === 0 ? (
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "14px",
              p: "20px",
              color: "gray",
            }}
          >
            Your shopping cart is empty 🛒
          </Typography>
        ) : (
          <>
            {cartPictures.map((picture) => (
              <Grid2
                container
                key={picture.id}
                sx={{ justifyContent: "center" }}
              >
                <Grid2
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "column",
                      md: "row",
                    },
                  }}
                >
                  <Card
                    sx={{
                      width: {
                        xs: "130px",
                        sm: "150px",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={picture.picUrl}
                      alt={picture.title}
                    ></CardMedia>
                  </Card>
                  <Box
                    sx={{
                      width: {
                        xs: "130px",
                        sm: "150px",
                      },
                      display: "flex",
                      justifyContent: "space-between",

                      flexDirection: {
                        xs: "column",
                        md: "row",
                      },
                      alignItems: "center",
                    }}
                  >
                    <CardContent sx={{ p: "5px 15px" }}>
                      <Typography sx={{ fontSize: "12px" }}>
                        {picture.title}
                      </Typography>
                      <Typography
                        color="primary.main"
                        sx={{
                          textAlign: {
                            xs: "center",
                            md: "start",
                          },
                        }}
                      >
                        {picture.price.toFixed(2)} €
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{
                        p: {
                          xs: "0px",
                        },
                      }}
                    >
                      <DeleteForeverIcon
                        color="primary"
                        onClick={() => deleteFromCart(picture.id)}
                        sx={{
                          cursor: "pointer",
                        }}
                      ></DeleteForeverIcon>
                    </CardActions>
                  </Box>
                </Grid2>
              </Grid2>
            ))}
            <Grid2
              sx={{
                display: "flex",
                justifyContent: "center",
                pb: "30px",
              }}
            >
              <Grid2
                container
                sx={{
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "15px",
                }}
              >
                <Grid2 sx={{ textAlign: "center" }}>
                  <Typography>
                    Total balance: {totalCartBalance.toFixed(2)} €
                  </Typography>
                </Grid2>
                <Grid2
                  sx={{
                    display: "flex",
                    gap: "10px",
                    flexDirection: {
                      xs: "column",
                      md: "row",
                    },
                  }}
                >
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<DeleteIcon />}
                    onClick={removeAll}
                  >
                    Remove All
                  </Button>
                  <Button
                    sx={{ width: "130px" }}
                    variant="contained"
                    size="small"
                    onClick={() => navigate("/checkout")}
                  >
                    Checkout
                  </Button>
                </Grid2>
              </Grid2>
            </Grid2>
          </>
        )}
      </Grid2>
    </Grid2>
  );
};
