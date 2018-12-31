// Token
import jwt from 'jsonwebtoken';
// jwt cho phép truyền 1 đoạn chuỗi giúp token mỗi người khác nhau
// jwt = mk + chuỗi + các thuật toán khác
export default { issue(payload, expiresIn) {
    return jwt.sign(
      payload, 'huy_le-abs', { expiresIn }
      );
  }
};
//payload: đăng nhập bằng username thì truyền payload=username (or email)
//expiresIn: thời gian tồn tại của token này
//vd: issue(username, '1d') (1d = 1 ngày)