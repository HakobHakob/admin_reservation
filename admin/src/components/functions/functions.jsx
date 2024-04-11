import { basePath, routePrefix } from "../config"
export const defaultUrl =
  "https://media.istockphoto.com/id/1433039224/photo/blue-user-3d-icon-person-profile-concept-isolated-on-white-background-with-social-member.jpg?s=2048x2048&w=is&k=20&c=4kYlrBEQrLWS--wVUBYiNnMCX6psXAFLuTnARiJotiM="

const locationData = (location) => {
  const pathName = location.pathname.slice(`/${routePrefix}`.length)
  const apiPathName = pathName.split("/")[1]
  const paramsRowIdName = pathName.split("/").pop()

  return {
    path: pathName,
    apiPath: apiPathName,
    paramsRowId: paramsRowIdName,
  }
}

export const setDataUrl = (location) => {
  const { apiPath, paramsRowId } = locationData(location)

  let url
  if (apiPath === "hotels") {
    url = `${basePath}/${apiPath}/find/${paramsRowId}`
  } else {
    url = `${basePath}/${apiPath}/${paramsRowId}`
  }
  return url
}

export const setHotelImgSrc = (data, location) => {
  const { apiPath } = locationData(location)

  let imgSrc
  if (apiPath === "hotels") {
    if (data.length === 0 || !data.photos[0]) {
      imgSrc = defaultUrl
    } else {
      imgSrc = data.photos[0]
    }
  } else {
    imgSrc = data.img
  }
  return imgSrc
}

export const capitalizeCityName = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1)
}
