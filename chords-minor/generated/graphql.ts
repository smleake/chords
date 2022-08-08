import * as TypeGraphQL from 'type-graphql';
export { TypeGraphQL };
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type FixDecorator<T> = T;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

@TypeGraphQL.ObjectType()
export class Album {
  __typename?: 'Album';

  @TypeGraphQL.Field(type => String, { nullable: true })
  album_type?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => [SimplifiedArtist], { nullable: 'itemsAndList' })
  artists?: Maybe<Array<Maybe<SimplifiedArtist>>>;

  @TypeGraphQL.Field(type => [String], { nullable: 'itemsAndList' })
  available_markets?: Maybe<Array<Maybe<Scalars['String']>>>;

  @TypeGraphQL.Field(type => [Copyright], { nullable: 'itemsAndList' })
  copyrights?: Maybe<Array<Maybe<Copyright>>>;

  @TypeGraphQL.Field(type => ExternalId, { nullable: true })
  external_ids?: Maybe<ExternalId>;

  @TypeGraphQL.Field(type => ExternalUrl, { nullable: true })
  external_urls?: Maybe<ExternalUrl>;

  @TypeGraphQL.Field(type => [String], { nullable: 'itemsAndList' })
  genres?: Maybe<Array<Maybe<Scalars['String']>>>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  href?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field(type => [Image], { nullable: 'itemsAndList' })
  images?: Maybe<Array<Maybe<Image>>>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  label?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  name?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  popularity?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  release_date?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  release_date_precision?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => AlbumRestriction, { nullable: true })
  restrictions?: Maybe<AlbumRestriction>;

  @TypeGraphQL.Field(type => [SimplifiedTrack], { nullable: 'itemsAndList' })
  tracks?: Maybe<Array<Maybe<SimplifiedTrack>>>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  type?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  uri?: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType()
export class AlbumRestriction {
  __typename?: 'AlbumRestriction';

  @TypeGraphQL.Field(type => String, { nullable: true })
  reason?: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType()
export class Artist {
  __typename?: 'Artist';

  @TypeGraphQL.Field(type => ExternalUrl, { nullable: true })
  external_urls?: Maybe<ExternalUrl>;

  @TypeGraphQL.Field(type => Followers, { nullable: true })
  followers?: Maybe<Followers>;

  @TypeGraphQL.Field(type => [String], { nullable: 'itemsAndList' })
  genres?: Maybe<Array<Maybe<Scalars['String']>>>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  href?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field(type => [Image], { nullable: 'itemsAndList' })
  images?: Maybe<Array<Maybe<Image>>>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  name?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  popularity?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  type?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  uri?: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType()
export class AudioFeatures {
  __typename?: 'AudioFeatures';

  @TypeGraphQL.Field(type => TypeGraphQL.Float, { nullable: true })
  acousticness?: Maybe<Scalars['Float']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  analysis_url?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Float, { nullable: true })
  danceability?: Maybe<Scalars['Float']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  duration_ms?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Float, { nullable: true })
  energy?: Maybe<Scalars['Float']>;

  @TypeGraphQL.Field(type => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field(type => TypeGraphQL.Float, { nullable: true })
  instrumentalness?: Maybe<Scalars['Float']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  key?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Float, { nullable: true })
  liveness?: Maybe<Scalars['Float']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Float, { nullable: true })
  loudness?: Maybe<Scalars['Float']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  mode?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Float, { nullable: true })
  speechiness?: Maybe<Scalars['Float']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Float, { nullable: true })
  tempo?: Maybe<Scalars['Float']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  time_signature?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  track_href?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  type?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  uri?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Float, { nullable: true })
  valence?: Maybe<Scalars['Float']>;
};

@TypeGraphQL.ObjectType()
export class Category {
  __typename?: 'Category';

  @TypeGraphQL.Field(type => String, { nullable: true })
  href?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => [Image], { nullable: 'itemsAndList' })
  icons?: Maybe<Array<Maybe<Image>>>;

  @TypeGraphQL.Field(type => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field(type => String, { nullable: true })
  name?: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType()
export class Context {
  __typename?: 'Context';

  @TypeGraphQL.Field(type => ExternalUrl, { nullable: true })
  external_urls?: Maybe<ExternalUrl>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  href?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  type?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  uri?: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType()
export class Copyright {
  __typename?: 'Copyright';

  @TypeGraphQL.Field(type => String, { nullable: true })
  text?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  type?: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType()
export class CurrentlyPlaying {
  __typename?: 'CurrentlyPlaying';

  @TypeGraphQL.Field(type => Context, { nullable: true })
  context?: Maybe<Context>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  currently_playing_type?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  is_playing?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  progress_ms?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  timestamp?: Maybe<Scalars['Int']>;
};

@TypeGraphQL.ObjectType()
export class CurrentlyPlayingContext {
  __typename?: 'CurrentlyPlayingContext';

  @TypeGraphQL.Field(type => Disallows, { nullable: true })
  actions?: Maybe<Disallows>;

  @TypeGraphQL.Field(type => Context, { nullable: true })
  context?: Maybe<Context>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  currently_playing_type?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => Device, { nullable: true })
  device?: Maybe<Device>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  is_playing?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  progress_ms?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  repeat_state?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  shuffle_state?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  timestamp?: Maybe<Scalars['Int']>;
};

@TypeGraphQL.ObjectType()
export class Cursor {
  __typename?: 'Cursor';

  @TypeGraphQL.Field(type => String, { nullable: true })
  after?: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType()
export class CursorPaging {
  __typename?: 'CursorPaging';

  @TypeGraphQL.Field(type => Cursor, { nullable: true })
  cursors?: Maybe<Cursor>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  href?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  limit?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  next?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  total?: Maybe<Scalars['Int']>;
};

@TypeGraphQL.ObjectType()
export class Device {
  __typename?: 'Device';

  @TypeGraphQL.Field(type => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  is_active?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  is_private_session?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  is_restricted?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  name?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  type?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  volume_percent?: Maybe<Scalars['Int']>;
};

@TypeGraphQL.ObjectType()
export class Devices {
  __typename?: 'Devices';

  @TypeGraphQL.Field(type => [Device], { nullable: 'itemsAndList' })
  devices?: Maybe<Array<Maybe<Device>>>;
};

@TypeGraphQL.ObjectType()
export class Disallows {
  __typename?: 'Disallows';

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  interrupting_playback?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  pausing?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  resuming?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  seeking?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  skipping_next?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  skipping_prev?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  toggling_repeat_context?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  toggling_repeat_track?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  toggling_shuffle?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  transferring_playback?: Maybe<Scalars['Boolean']>;
};

@TypeGraphQL.ObjectType()
export class Episode {
  __typename?: 'Episode';

  @TypeGraphQL.Field(type => String, { nullable: true })
  audio_preview_url?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  description?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  duration_ms?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  explicit?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => ExternalUrl, { nullable: true })
  external_urls?: Maybe<ExternalUrl>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  href?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field(type => [Image], { nullable: 'itemsAndList' })
  images?: Maybe<Array<Maybe<Image>>>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  is_externally_hosted?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  is_playable?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  language?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => [String], { nullable: 'itemsAndList' })
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  name?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  release_date?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  release_date_precision?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => ResumePoint, { nullable: true })
  resume_point?: Maybe<ResumePoint>;

  @TypeGraphQL.Field(type => SimplifiedShow, { nullable: true })
  show?: Maybe<SimplifiedShow>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  type?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  uri?: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType()
export class Error {
  __typename?: 'Error';

  @TypeGraphQL.Field(type => String, { nullable: true })
  message?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  status?: Maybe<Scalars['Int']>;
};

@TypeGraphQL.ObjectType()
export class ExplicitContentSettings {
  __typename?: 'ExplicitContentSettings';

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  filter_enabled?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  filter_locked?: Maybe<Scalars['Boolean']>;
};

@TypeGraphQL.ObjectType()
export class ExternalId {
  __typename?: 'ExternalId';

  @TypeGraphQL.Field(type => String, { nullable: true })
  ean?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  isrc?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  upc?: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType()
export class ExternalUrl {
  __typename?: 'ExternalUrl';

  @TypeGraphQL.Field(type => String, { nullable: true })
  spotify?: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType()
export class Followers {
  __typename?: 'Followers';

  @TypeGraphQL.Field(type => String, { nullable: true })
  href?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  total?: Maybe<Scalars['Int']>;
};

@TypeGraphQL.ObjectType()
export class GenericSearch {
  __typename?: 'GenericSearch';

  @TypeGraphQL.Field(type => String, { nullable: true })
  href?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => [SearchResultUnion], { nullable: 'itemsAndList' })
  items?: Maybe<Array<Maybe<typeof SearchResultUnion>>>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  limit?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  next?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  offset?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  previous?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  total?: Maybe<Scalars['Int']>;
};

@TypeGraphQL.ObjectType()
export class GenericSearchResults {
  __typename?: 'GenericSearchResults';

  @TypeGraphQL.Field(type => GenericSearch, { nullable: true })
  albums?: Maybe<GenericSearch>;

  @TypeGraphQL.Field(type => GenericSearch, { nullable: true })
  artists?: Maybe<GenericSearch>;

  @TypeGraphQL.Field(type => GenericSearch, { nullable: true })
  tracks?: Maybe<GenericSearch>;
};

@TypeGraphQL.ObjectType()
export class Image {
  __typename?: 'Image';

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  height?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  url?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  width?: Maybe<Scalars['Int']>;
};

@TypeGraphQL.ObjectType()
export class LinkedTrack {
  __typename?: 'LinkedTrack';

  @TypeGraphQL.Field(type => ExternalUrl, { nullable: true })
  external_urls?: Maybe<ExternalUrl>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  href?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field(type => String, { nullable: true })
  type?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  uri?: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType()
export class Paging {
  __typename?: 'Paging';

  @TypeGraphQL.Field(type => String, { nullable: true })
  href?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  limit?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  next?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  offset?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  previous?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  total?: Maybe<Scalars['Int']>;
};

@TypeGraphQL.ObjectType()
export class PlayerError {
  __typename?: 'PlayerError';

  @TypeGraphQL.Field(type => String, { nullable: true })
  message?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  reason?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  status?: Maybe<Scalars['Int']>;
};

@TypeGraphQL.ObjectType()
export class PlayHistory {
  __typename?: 'PlayHistory';

  @TypeGraphQL.Field(type => Context, { nullable: true })
  context?: Maybe<Context>;

  @TypeGraphQL.Field(type => SimplifiedTrack, { nullable: true })
  track?: Maybe<SimplifiedTrack>;
};

@TypeGraphQL.ObjectType()
export class Playlist {
  __typename?: 'Playlist';

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  collaborative?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  description?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => ExternalUrl, { nullable: true })
  external_urls?: Maybe<ExternalUrl>;

  @TypeGraphQL.Field(type => Followers, { nullable: true })
  followers?: Maybe<Followers>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  href?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field(type => [Image], { nullable: 'itemsAndList' })
  images?: Maybe<Array<Maybe<Image>>>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  name?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => PublicUser, { nullable: true })
  owner?: Maybe<PublicUser>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  public?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  snapshot_id?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => [PlaylistTrack], { nullable: 'itemsAndList' })
  tracks?: Maybe<Array<Maybe<PlaylistTrack>>>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  type?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  uri?: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType()
export class PlaylistTrack {
  __typename?: 'PlaylistTrack';

  @TypeGraphQL.Field(type => PublicUser, { nullable: true })
  added_by?: Maybe<PublicUser>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  is_local?: Maybe<Scalars['Boolean']>;
};

@TypeGraphQL.ObjectType()
export class PlaylistTracksRef {
  __typename?: 'PlaylistTracksRef';

  @TypeGraphQL.Field(type => String, { nullable: true })
  href?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  total?: Maybe<Scalars['Int']>;
};

@TypeGraphQL.ObjectType()
export class PrivateUser {
  __typename?: 'PrivateUser';

  @TypeGraphQL.Field(type => String, { nullable: true })
  country?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  display_name?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  email?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => ExplicitContentSettings, { nullable: true })
  explicit_content?: Maybe<ExplicitContentSettings>;

  @TypeGraphQL.Field(type => ExternalUrl, { nullable: true })
  external_urls?: Maybe<ExternalUrl>;

  @TypeGraphQL.Field(type => Followers, { nullable: true })
  followers?: Maybe<Followers>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  href?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field(type => [Image], { nullable: 'itemsAndList' })
  images?: Maybe<Array<Maybe<Image>>>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  product?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  type?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  uri?: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType()
export class PublicUser {
  __typename?: 'PublicUser';

  @TypeGraphQL.Field(type => String, { nullable: true })
  display_name?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => ExternalUrl, { nullable: true })
  external_urls?: Maybe<ExternalUrl>;

  @TypeGraphQL.Field(type => Followers, { nullable: true })
  followers?: Maybe<Followers>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  href?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field(type => [Image], { nullable: 'itemsAndList' })
  images?: Maybe<Array<Maybe<Image>>>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  type?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  uri?: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType()
export class Recommendations {
  __typename?: 'Recommendations';

  @TypeGraphQL.Field(type => [RecommendationSeed], { nullable: 'itemsAndList' })
  seeds?: Maybe<Array<Maybe<RecommendationSeed>>>;

  @TypeGraphQL.Field(type => [SimplifiedTrack], { nullable: 'itemsAndList' })
  tracks?: Maybe<Array<Maybe<SimplifiedTrack>>>;
};

@TypeGraphQL.ObjectType()
export class RecommendationSeed {
  __typename?: 'RecommendationSeed';

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  afterFilteringSize?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  afterRelinkingSize?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  href?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  initialPoolSize?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  type?: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType()
export class ResumePoint {
  __typename?: 'ResumePoint';

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  fully_played?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  resume_position_ms?: Maybe<Scalars['Int']>;
};

export const SearchResultUnion = TypeGraphQL.createUnionType({
  name: 'SearchResult',
  types: () => [Album, Artist, Track] as const,
  resolveType: value => {
    if("album_type" in value)
      return Album
    if("disc_number" in value)
      return Track
    return Artist
  }
});

@TypeGraphQL.ObjectType()
export class Show {
  __typename?: 'Show';

  @TypeGraphQL.Field(type => [String], { nullable: 'itemsAndList' })
  available_markets?: Maybe<Array<Maybe<Scalars['String']>>>;

  @TypeGraphQL.Field(type => [Copyright], { nullable: 'itemsAndList' })
  copyrights?: Maybe<Array<Maybe<Copyright>>>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  description?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => [SimplifiedEpisode], { nullable: 'itemsAndList' })
  episodes?: Maybe<Array<Maybe<SimplifiedEpisode>>>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  explicit?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => ExternalUrl, { nullable: true })
  external_urls?: Maybe<ExternalUrl>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  href?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field(type => [Image], { nullable: 'itemsAndList' })
  images?: Maybe<Array<Maybe<Image>>>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  is_externally_hosted?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => [String], { nullable: 'itemsAndList' })
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  media_type?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  name?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  publisher?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  type?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  uri?: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType()
export class SimplifiedAlbum {
  __typename?: 'SimplifiedAlbum';

  @TypeGraphQL.Field(type => String, { nullable: true })
  album_group?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  album_type?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => [SimplifiedArtist], { nullable: 'itemsAndList' })
  artists?: Maybe<Array<Maybe<SimplifiedArtist>>>;

  @TypeGraphQL.Field(type => [String], { nullable: 'itemsAndList' })
  available_markets?: Maybe<Array<Maybe<Scalars['String']>>>;

  @TypeGraphQL.Field(type => ExternalUrl, { nullable: true })
  external_urls?: Maybe<ExternalUrl>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  href?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field(type => [Image], { nullable: 'itemsAndList' })
  images?: Maybe<Array<Maybe<Image>>>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  name?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  release_date?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  release_date_precision?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => AlbumRestriction, { nullable: true })
  restrictions?: Maybe<AlbumRestriction>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  type?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  uri?: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType()
export class SimplifiedArtist {
  __typename?: 'SimplifiedArtist';

  @TypeGraphQL.Field(type => ExternalUrl, { nullable: true })
  external_urls?: Maybe<ExternalUrl>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  href?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field(type => String, { nullable: true })
  name?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  type?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  uri?: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType()
export class SimplifiedEpisode {
  __typename?: 'SimplifiedEpisode';

  @TypeGraphQL.Field(type => String, { nullable: true })
  audio_preview_url?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  description?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  duration_ms?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  explicit?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => ExternalUrl, { nullable: true })
  external_urls?: Maybe<ExternalUrl>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  href?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field(type => [Image], { nullable: 'itemsAndList' })
  images?: Maybe<Array<Maybe<Image>>>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  is_externally_hosted?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  is_playable?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  language?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => [String], { nullable: 'itemsAndList' })
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  name?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  release_date?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  release_date_precision?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => ResumePoint, { nullable: true })
  resume_point?: Maybe<ResumePoint>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  type?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  uri?: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType()
export class SimplifiedPlaylist {
  __typename?: 'SimplifiedPlaylist';

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  collaborative?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  description?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => ExternalUrl, { nullable: true })
  external_urls?: Maybe<ExternalUrl>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  href?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field(type => [Image], { nullable: 'itemsAndList' })
  images?: Maybe<Array<Maybe<Image>>>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  name?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => PublicUser, { nullable: true })
  owner?: Maybe<PublicUser>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  public?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  snapshot_id?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => PlaylistTracksRef, { nullable: true })
  tracks?: Maybe<PlaylistTracksRef>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  type?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  uri?: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType()
export class SimplifiedShow {
  __typename?: 'SimplifiedShow';

  @TypeGraphQL.Field(type => [String], { nullable: 'itemsAndList' })
  available_markets?: Maybe<Array<Maybe<Scalars['String']>>>;

  @TypeGraphQL.Field(type => [Copyright], { nullable: 'itemsAndList' })
  copyrights?: Maybe<Array<Maybe<Copyright>>>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  description?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  explicit?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => ExternalUrl, { nullable: true })
  external_urls?: Maybe<ExternalUrl>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  href?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field(type => [Image], { nullable: 'itemsAndList' })
  images?: Maybe<Array<Maybe<Image>>>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  is_externally_hosted?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => [String], { nullable: 'itemsAndList' })
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  media_type?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  name?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  publisher?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  type?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  uri?: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType()
export class SimplifiedTrack {
  __typename?: 'SimplifiedTrack';

  @TypeGraphQL.Field(type => [SimplifiedArtist], { nullable: 'itemsAndList' })
  artists?: Maybe<Array<Maybe<SimplifiedArtist>>>;

  @TypeGraphQL.Field(type => [String], { nullable: 'itemsAndList' })
  available_markets?: Maybe<Array<Maybe<Scalars['String']>>>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  disc_number?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  duration_ms?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  explicit?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => ExternalUrl, { nullable: true })
  external_urls?: Maybe<ExternalUrl>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  href?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  is_local?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  is_playable?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => LinkedTrack, { nullable: true })
  linked_from?: Maybe<LinkedTrack>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  name?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  preview_url?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TrackRestriction, { nullable: true })
  restrictions?: Maybe<TrackRestriction>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  track_number?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  type?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  uri?: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType()
export class Track {
  __typename?: 'Track';

  @TypeGraphQL.Field(type => SimplifiedAlbum, { nullable: true })
  album?: Maybe<SimplifiedAlbum>;

  @TypeGraphQL.Field(type => [SimplifiedArtist], { nullable: 'itemsAndList' })
  artists?: Maybe<Array<Maybe<SimplifiedArtist>>>;

  @TypeGraphQL.Field(type => [String], { nullable: 'itemsAndList' })
  available_markets?: Maybe<Array<Maybe<Scalars['String']>>>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  disc_number?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  duration_ms?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  explicit?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => ExternalId, { nullable: true })
  external_ids?: Maybe<ExternalId>;

  @TypeGraphQL.Field(type => ExternalUrl, { nullable: true })
  external_urls?: Maybe<ExternalUrl>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  href?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  is_local?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => Boolean, { nullable: true })
  is_playable?: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  linked_from?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  name?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  popularity?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  preview_url?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => TrackRestriction, { nullable: true })
  restrictions?: Maybe<TrackRestriction>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  track_number?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  type?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field(type => String, { nullable: true })
  uri?: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType()
export class TrackRestriction {
  __typename?: 'TrackRestriction';

  @TypeGraphQL.Field(type => String, { nullable: true })
  reason?: Maybe<Scalars['String']>;
};

@TypeGraphQL.ObjectType()
export class TuneableTrack {
  __typename?: 'TuneableTrack';

  @TypeGraphQL.Field(type => TypeGraphQL.Float, { nullable: true })
  acousticness?: Maybe<Scalars['Float']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Float, { nullable: true })
  danceability?: Maybe<Scalars['Float']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  duration_ms?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Float, { nullable: true })
  energy?: Maybe<Scalars['Float']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Float, { nullable: true })
  instrumentalness?: Maybe<Scalars['Float']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  key?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Float, { nullable: true })
  liveness?: Maybe<Scalars['Float']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Float, { nullable: true })
  loudness?: Maybe<Scalars['Float']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  mode?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Float, { nullable: true })
  popularity?: Maybe<Scalars['Float']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Float, { nullable: true })
  speechiness?: Maybe<Scalars['Float']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Float, { nullable: true })
  tempo?: Maybe<Scalars['Float']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true })
  time_signature?: Maybe<Scalars['Int']>;

  @TypeGraphQL.Field(type => TypeGraphQL.Float, { nullable: true })
  valence?: Maybe<Scalars['Float']>;
};
