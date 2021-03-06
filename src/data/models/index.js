import sequelize from '../sequelize';
import User from './User';
import UserLogin from './UserLogin';
import UserClaim from './UserClaim';
import UserProfile from './UserProfile';
import Listing from './Listing';
import Suburb from './Location/Suburb';
import Region from './Location/Region';
import District from './Location/District';
import PropertyKind from './PropertyKind';

User.Logins = User.hasMany(UserLogin, {
  foreignKey: 'userId',
  as: 'logins',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

User.Claims = User.hasMany(UserClaim, {
  foreignKey: 'userId',
  as: 'claims',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

User.Profile = User.hasOne(UserProfile, {
  foreignKey: 'userId',
  as: 'profile',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

function sync(...args) {
  return sequelize.sync(...args);
}

export default { sync };
export {
  User,
  UserLogin,
  UserClaim,
  UserProfile,
  Listing,
  Region,
  District,
  Suburb,
  PropertyKind,
};
