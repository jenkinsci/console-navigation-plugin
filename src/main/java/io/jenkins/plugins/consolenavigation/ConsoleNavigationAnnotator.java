package io.jenkins.plugins.consolenavigation;

import hudson.MarkupText;
import hudson.console.ConsoleAnnotator;

import javax.annotation.CheckForNull;
import javax.annotation.Nonnull;

/**
 * @author stefan.welsch@b-nova.com
 */
public class ConsoleNavigationAnnotator extends ConsoleAnnotator {

	@CheckForNull
	@Override
	public ConsoleAnnotator annotate(@Nonnull Object context, @Nonnull MarkupText markupText) {
		return this;
	}
}
