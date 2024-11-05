import * as handlers from './handlers/index.js'
import type { Bot, DiscordGatewayPayload, GatewayDispatchEventNames } from './index.js'
import type { BotGatewayHandlerOptions } from './typings.js'

export function createBotGatewayHandlers(
  options: Partial<BotGatewayHandlerOptions>,
): Record<GatewayDispatchEventNames, (bot: Bot, data: DiscordGatewayPayload, shardId: number) => any> {
  return {
    APPLICATION_COMMAND_PERMISSIONS_UPDATE: options.APPLICATION_COMMAND_PERMISSIONS_UPDATE ?? handlers.handleApplicationCommandPermissionsUpdate,
    AUTO_MODERATION_ACTION_EXECUTION: options.AUTO_MODERATION_ACTION_EXECUTION ?? handlers.handleAutoModerationActionExecution,
    AUTO_MODERATION_RULE_CREATE: options.AUTO_MODERATION_RULE_CREATE ?? handlers.handleAutoModerationRuleCreate,
    AUTO_MODERATION_RULE_DELETE: options.AUTO_MODERATION_RULE_DELETE ?? handlers.handleAutoModerationRuleDelete,
    AUTO_MODERATION_RULE_UPDATE: options.AUTO_MODERATION_RULE_UPDATE ?? handlers.handleAutoModerationRuleUpdate,
    CHANNEL_CREATE: options.CHANNEL_CREATE ?? handlers.handleChannelCreate,
    CHANNEL_DELETE: options.CHANNEL_DELETE ?? handlers.handleChannelDelete,
    CHANNEL_PINS_UPDATE: options.CHANNEL_PINS_UPDATE ?? handlers.handleChannelPinsUpdate,
    CHANNEL_UPDATE: options.CHANNEL_UPDATE ?? handlers.handleChannelUpdate,
    GUILD_AUDIT_LOG_ENTRY_CREATE: options.GUILD_AUDIT_LOG_ENTRY_CREATE ?? handlers.handleGuildAuditLogEntryCreate,
    GUILD_BAN_ADD: options.GUILD_BAN_ADD ?? handlers.handleGuildBanAdd,
    GUILD_BAN_REMOVE: options.GUILD_BAN_REMOVE ?? handlers.handleGuildBanRemove,
    GUILD_CREATE: options.GUILD_CREATE ?? handlers.handleGuildCreate,
    GUILD_DELETE: options.GUILD_DELETE ?? handlers.handleGuildDelete,
    GUILD_EMOJIS_UPDATE: options.GUILD_EMOJIS_UPDATE ?? handlers.handleGuildEmojisUpdate,
    GUILD_INTEGRATIONS_UPDATE: options.GUILD_INTEGRATIONS_UPDATE ?? handlers.handleGuildIntegrationsUpdate,
    GUILD_MEMBER_ADD: options.GUILD_MEMBER_ADD ?? handlers.handleGuildMemberAdd,
    GUILD_MEMBER_REMOVE: options.GUILD_MEMBER_REMOVE ?? handlers.handleGuildMemberRemove,
    GUILD_MEMBER_UPDATE: options.GUILD_MEMBER_UPDATE ?? handlers.handleGuildMemberUpdate,
    GUILD_MEMBERS_CHUNK: options.GUILD_MEMBERS_CHUNK ?? handlers.handleGuildMembersChunk,
    GUILD_ROLE_CREATE: options.GUILD_ROLE_CREATE ?? handlers.handleGuildRoleCreate,
    GUILD_ROLE_DELETE: options.GUILD_ROLE_DELETE ?? handlers.handleGuildRoleDelete,
    GUILD_ROLE_UPDATE: options.GUILD_ROLE_UPDATE ?? handlers.handleGuildRoleUpdate,
    GUILD_SCHEDULED_EVENT_CREATE: options.GUILD_SCHEDULED_EVENT_CREATE ?? handlers.handleGuildScheduledEventCreate,
    GUILD_SCHEDULED_EVENT_DELETE: options.GUILD_SCHEDULED_EVENT_DELETE ?? handlers.handleGuildScheduledEventDelete,
    GUILD_SCHEDULED_EVENT_UPDATE: options.GUILD_SCHEDULED_EVENT_UPDATE ?? handlers.handleGuildScheduledEventUpdate,
    GUILD_SCHEDULED_EVENT_USER_ADD: options.GUILD_SCHEDULED_EVENT_USER_ADD ?? handlers.handleGuildScheduledEventUserAdd,
    GUILD_SCHEDULED_EVENT_USER_REMOVE: options.GUILD_SCHEDULED_EVENT_USER_REMOVE ?? handlers.handleGuildScheduledEventUserRemove,
    GUILD_STICKERS_UPDATE: options.GUILD_STICKERS_UPDATE ?? handlers.handleGuildStickersUpdate,
    GUILD_UPDATE: options.GUILD_UPDATE ?? handlers.handleGuildUpdate,
    INTERACTION_CREATE: options.INTERACTION_CREATE ?? handlers.handleInteractionCreate,
    INTEGRATION_CREATE: options.INTEGRATION_CREATE ?? handlers.handleIntegrationCreate,
    INTEGRATION_UPDATE: options.INTEGRATION_UPDATE ?? handlers.handleIntegrationUpdate,
    INTEGRATION_DELETE: options.INTEGRATION_DELETE ?? handlers.handleIntegrationDelete,
    INVITE_CREATE: options.INVITE_CREATE ?? handlers.handleInviteCreate,
    INVITE_DELETE: options.INVITE_DELETE ?? handlers.handleInviteDelete,
    MESSAGE_CREATE: options.MESSAGE_CREATE ?? handlers.handleMessageCreate,
    MESSAGE_DELETE_BULK: options.MESSAGE_DELETE_BULK ?? handlers.handleMessageDeleteBulk,
    MESSAGE_DELETE: options.MESSAGE_DELETE ?? handlers.handleMessageDelete,
    MESSAGE_REACTION_ADD: options.MESSAGE_REACTION_ADD ?? handlers.handleMessageReactionAdd,
    MESSAGE_REACTION_REMOVE_ALL: options.MESSAGE_REACTION_REMOVE_ALL ?? handlers.handleMessageReactionRemoveAll,
    MESSAGE_REACTION_REMOVE_EMOJI: options.MESSAGE_REACTION_REMOVE_EMOJI ?? handlers.handleMessageReactionRemoveEmoji,
    MESSAGE_REACTION_REMOVE: options.MESSAGE_REACTION_REMOVE ?? handlers.handleMessageReactionRemove,
    MESSAGE_UPDATE: options.MESSAGE_UPDATE ?? handlers.handleMessageUpdate,
    PRESENCE_UPDATE: options.PRESENCE_UPDATE ?? handlers.handlePresenceUpdate,
    READY: options.READY ?? handlers.handleReady,
    STAGE_INSTANCE_CREATE: options.STAGE_INSTANCE_CREATE ?? handlers.handleStageInstanceCreate,
    STAGE_INSTANCE_DELETE: options.STAGE_INSTANCE_DELETE ?? handlers.handleStageInstanceDelete,
    STAGE_INSTANCE_UPDATE: options.STAGE_INSTANCE_UPDATE ?? handlers.handleStageInstanceUpdate,
    THREAD_CREATE: options.THREAD_CREATE ?? handlers.handleThreadCreate,
    THREAD_DELETE: options.THREAD_DELETE ?? handlers.handleThreadDelete,
    THREAD_UPDATE: options.THREAD_UPDATE ?? handlers.handleThreadUpdate,
    THREAD_LIST_SYNC: options.THREAD_LIST_SYNC ?? handlers.handleThreadListSync,
    THREAD_MEMBER_UPDATE: options.THREAD_MEMBERS_UPDATE ?? handlers.handleThreadMembersUpdate,
    THREAD_MEMBERS_UPDATE: options.THREAD_MEMBERS_UPDATE ?? handlers.handleThreadMembersUpdate,
    TYPING_START: options.TYPING_START ?? handlers.handleTypingStart,
    USER_UPDATE: options.USER_UPDATE ?? handlers.handleUserUpdate,
    VOICE_CHANNEL_EFFECT_SEND: options.VOICE_CHANNEL_EFFECT_SEND ?? handlers.handleVoiceChannelEffectSend,
    VOICE_SERVER_UPDATE: options.VOICE_SERVER_UPDATE ?? handlers.handleVoiceServerUpdate,
    VOICE_STATE_UPDATE: options.VOICE_STATE_UPDATE ?? handlers.handleVoiceStateUpdate,
    WEBHOOKS_UPDATE: options.WEBHOOKS_UPDATE ?? handlers.handleWebhooksUpdate,
    ENTITLEMENT_CREATE: options.ENTITLEMENT_CREATE ?? handlers.handleEntitlementCreate,
    ENTITLEMENT_UPDATE: options.ENTITLEMENT_UPDATE ?? handlers.handleEntitlementUpdate,
    ENTITLEMENT_DELETE: options.ENTITLEMENT_DELETE ?? handlers.handleEntitlementDelete,
    MESSAGE_POLL_VOTE_ADD: options.MESSAGE_POLL_VOTE_ADD ?? handlers.handleMessagePollVoteAdd,
    MESSAGE_POLL_VOTE_REMOVE: options.MESSAGE_POLL_VOTE_REMOVE ?? handlers.handleMessagePollVoteRemove,
    SUBSCRIPTION_CREATE: options.SUBSCRIPTION_CREATE ?? handlers.handleSubscriptionCreate,
    SUBSCRIPTION_UPDATE: options.SUBSCRIPTION_UPDATE ?? handlers.handleSubscriptionUpdate,
    SUBSCRIPTION_DELETE: options.SUBSCRIPTION_DELETE ?? handlers.handleSubscriptionDelete,
  }
}

export interface GatewayHandlers extends ReturnType<typeof createBotGatewayHandlers> {}
